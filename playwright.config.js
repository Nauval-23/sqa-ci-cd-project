const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: '.',
  timeout: 30000,
  retries: process.env.CI ? 1 : 0,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      testMatch: 'e2e/**/*.spec.js',
      use: { ...devices['Desktop Chrome'], baseURL: 'https://www.saucedemo.com' },
    },
    {
      name: 'firefox',
      testMatch: 'e2e/**/*.spec.js',
      use: { ...devices['Desktop Firefox'], baseURL: 'https://www.saucedemo.com' },
    },
    {
      name: 'webkit',
      testMatch: 'e2e/**/*.spec.js',
      use: { ...devices['Desktop Safari'], baseURL: 'https://www.saucedemo.com' },
    },
    {
      name: 'api',
      testMatch: 'api/**/*.spec.js',
      use: { baseURL: 'https://jsonplaceholder.typicode.com' },
    },
  ],
});
