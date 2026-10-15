class InventoryService {
  async getStock(productId) {
    throw new Error('Not implemented');
  }

  async reduceStock(productId, qty) {
    throw new Error('Not implemented');
  }
}

module.exports = InventoryService;
