const { test, expect } = require('@playwright/test');
const { login } = require('./helpers');

test.describe('SauceDemo - Login & Logout', () => {
  test('E2E-01 login berhasil dengan standard_user', async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('E2E-02 login gagal dengan password salah', async ({ page }) => {
    await login(page, 'standard_user', 'wrong_password');
    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText('Username and password do not match');
  });

  test('E2E-03 login gagal dengan locked_out_user', async ({ page }) => {
    await login(page, 'locked_out_user');
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
  });

  test('E2E-04 validasi: username kosong', async ({ page }) => {
    await page.goto('/');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Username is required');
  });

  test('E2E-05 validasi: password kosong', async ({ page }) => {
    await page.goto('/');
    await page.fill('#user-name', 'standard_user');
    await page.click('#login-button');
    await expect(page.locator('[data-test="error"]')).toContainText('Password is required');
  });

  test('E2E-06 logout kembali ke halaman login', async ({ page }) => {
    await login(page);
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('/');
    await expect(page.locator('#login-button')).toBeVisible();
  });
});
