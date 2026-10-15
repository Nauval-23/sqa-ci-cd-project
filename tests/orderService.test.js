const OrderService = require('../src/orderService');
const PaymentService = require('../src/paymentService');
const InventoryService = require('../src/inventoryService');

jest.mock('../src/paymentService');
jest.mock('../src/inventoryService');

describe('OrderService Integration Tests (Order + Payment + Inventory)', () => {
  let orderService;
  let payment;
  let inventory;
  const order = { userId: 1, productId: 'P1', qty: 2, price: 50000 };

  beforeEach(() => {
    payment = new PaymentService();
    inventory = new InventoryService();
    orderService = new OrderService(payment, inventory);
  });

  test('order sukses: cek stok, bayar, kurangi stok', async () => {
    inventory.getStock.mockResolvedValue(10);
    payment.charge.mockResolvedValue(true);
    inventory.reduceStock.mockResolvedValue();

    const result = await orderService.createOrder(order);

    expect(result).toEqual({ userId: 1, productId: 'P1', qty: 2, total: 100000, status: 'PAID' });
    expect(payment.charge).toHaveBeenCalledWith(1, 100000);
    expect(inventory.reduceStock).toHaveBeenCalledWith('P1', 2);
  });

  test('payment gagal: stok tidak dikurangi', async () => {
    inventory.getStock.mockResolvedValue(10);
    payment.charge.mockResolvedValue(false);

    await expect(orderService.createOrder(order)).rejects.toThrow('Payment failed');
    expect(inventory.reduceStock).not.toHaveBeenCalled();
  });

  test('stok habis: payment tidak dipanggil', async () => {
    inventory.getStock.mockResolvedValue(1);

    await expect(orderService.createOrder(order)).rejects.toThrow('Out of stock');
    expect(payment.charge).not.toHaveBeenCalled();
  });

  test('stok tepat sama dengan qty masih diterima (boundary)', async () => {
    inventory.getStock.mockResolvedValue(2);
    payment.charge.mockResolvedValue(true);
    await expect(orderService.createOrder(order)).resolves.toMatchObject({ status: 'PAID' });
  });

  test('data order tidak valid', async () => {
    await expect(orderService.createOrder({ ...order, userId: null })).rejects.toThrow('Invalid order data');
    await expect(orderService.createOrder({ ...order, productId: '' })).rejects.toThrow('Invalid order data');
  });

  test.each([0, -1, 1.5, '2'])('qty tidak valid (%p) ditolak', async (qty) => {
    await expect(orderService.createOrder({ ...order, qty })).rejects.toThrow(
      'Quantity must be a positive integer'
    );
  });
});
