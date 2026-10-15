const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('SauceDemo - Inventory, Cart & Checkout', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('E2E-07 inventory menampilkan 6 produk', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('E2E-08 sorting harga rendah ke tinggi', async ({ page }) => {
    await page.selectOption('[data-test="product-sort-container"]', 'lohi');
    const prices = (await page.locator('.inventory_item_price').allTextContents()).map((p) =>
      parseFloat(p.replace('$', ''))
    );
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test('E2E-09 tambah produk ke cart menampilkan badge 1', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('E2E-10 hapus produk dari cart', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('E2E-11 checkout gagal jika first name kosong', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });

  test('E2E-12 transaksi end-to-end dari login sampai selesai', async ({ page }) => {
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText('Sauce Labs Backpack');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'Budi');
    await page.fill('[data-test="lastName"]', 'Santoso');
    await page.fill('[data-test="postalCode"]', '63411');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
