import { Browser, chromium, test, Page, BrowserContext } from '@playwright/test';
import { BASE_URL } from '../config/env';
import { credentials } from '../config/credentials';
import { LoginPage } from '../pages/LoginPage';

test('Login test for multiple users using separate contexts', async () => {
  const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });

  // --------- Context 1: standard_user ---------
  const context1: BrowserContext = await browser.newContext();
  const page1: Page = await context1.newPage();
  const loginPage1 = new LoginPage(page1);

  await page1.goto(BASE_URL);
  await loginPage1.login(
    credentials.standard_user.username,
    credentials.standard_user.password
  );

  // --------- Context 2: locked_out_user ---------
  const context2: BrowserContext = await browser.newContext();
  const page2: Page = await context2.newPage();
  const loginPage2 = new LoginPage(page2);

  await page2.goto(BASE_URL);
  await loginPage2.login(
    credentials.locked_out_user.username,
    credentials.locked_out_user.password
  );

  // Cleanup
  await page1.close();
  await page2.close();
  await context1.close();
  await context2.close();
  await browser.close();
});
