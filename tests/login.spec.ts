import { test,expect, chromium, Browser, Page, Locator } from "playwright/test";



test('login test', async() => {

   const browser:Browser = await chromium.launch({headless:false});
   const page:Page = await browser.newPage();
   const url = "https://naveenautomationlabs.com/opencart/index.php?route=account/login"

   await page.goto(url);

   const email:Locator = page.locator("#input-email");
   const password:Locator = page.locator("#input-password");
   const loginButton:Locator = page.locator("[value='Login']");

   await email.fill("pwtest@opencart.com");
   await password.fill("playwright@123");
   await loginButton.click();

   console.log("Page Title : ", page.title());

   await page.screenshot({path: 'homepage.png'})

})