import {test, expect, Browser, Page, Locator} from '@playwright/test';
import {webkit, chromium, firefox} from 'playwright';

test.skip('login test', async()=> {

    const browser:Browser = await firefox.launch({headless:true});
    const page:Page = await browser.newPage();

    await page.goto('https://www.saucedemo.com/v1/index.html');

    const email:Locator = await page.locator('#user-name');
    const pwd:Locator = await page.locator('#password');
    const loginButton:Locator = await page.locator('#login-button');

    await email.fill('standard_user');
    await pwd.fill('secret_sauce');
    await loginButton.click();

    const pageHeader = await page.locator('.product_label').textContent();
    console.log(`Page header is: ${pageHeader}`);

     // Validate header text
     await expect(page.locator('.product_label')).toHaveText('Products');

    // Take screenshot
     await page.screenshot({ path: 'productPage.png' });

    browser.close();


})