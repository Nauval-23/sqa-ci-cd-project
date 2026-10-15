async function login(page, username = 'standard_user', password = 'secret_sauce') {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.fill('#user-name', username);
  await page.fill('#password', password);
  await page.click('#login-button');
}

module.exports = { login };