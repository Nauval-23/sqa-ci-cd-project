class OrderService {
  constructor(paymentService, inventoryService) {
    this.paymentService = paymentService;
    this.inventoryService = inventoryService;
  }

  async createOrder({ userId, productId, qty, price }) {
    if (!userId || !productId) {
      throw new Error('Invalid order data');
    }
    if (!Number.isInteger(qty) || qty <= 0) {
      throw new Error('Quantity must be a positive integer');
    }

    const stock = await this.inventoryService.getStock(productId);
    if (stock < qty) {
      throw new Error('Out of stock');
    }

    const total = qty * price;
    const paid = await this.paymentService.charge(userId, total);
    if (!paid) {
      throw new Error('Payment failed');
    }

    await this.inventoryService.reduceStock(productId, qty);
    return { userId, productId, qty, total, status: 'PAID' };
  }
}

module.exports = OrderService;
