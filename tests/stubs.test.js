// Kelas stub belum punya implementasi nyata; test ini memastikan kontraknya jelas.
const UserRepository = require('../src/userRepository');
const EmailService = require('../src/emailService');
const PaymentService = require('../src/paymentService');
const InventoryService = require('../src/inventoryService');

describe('Stub classes (belum diimplementasikan)', () => {
  test('UserRepository.findById & save', async () => {
    const repo = new UserRepository();
    await expect(repo.findById(1)).rejects.toThrow('Not implemented');
    await expect(repo.save({})).rejects.toThrow('Not implemented');
  });

  test('EmailService.sendWelcomeEmail', async () => {
    await expect(new EmailService().sendWelcomeEmail('a@b.c')).rejects.toThrow('Not implemented');
  });

  test('PaymentService.charge', async () => {
    await expect(new PaymentService().charge(1, 100)).rejects.toThrow('Not implemented');
  });

  test('InventoryService.getStock & reduceStock', async () => {
    const inv = new InventoryService();
    await expect(inv.getStock(1)).rejects.toThrow('Not implemented');
    await expect(inv.reduceStock(1, 1)).rejects.toThrow('Not implemented');
  });
});
