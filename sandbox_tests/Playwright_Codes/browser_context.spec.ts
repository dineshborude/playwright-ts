import { test,expect, chromium, Browser, Page, Locator, BrowserContext } from "@playwright/test";



test('browser context test', async() => {

   const browser:Browser = await chromium.launch({headless:true});

   //browser 1 context
   const context1:BrowserContext=await browser.newContext();
   const page1:Page = await context1.newPage();
   const url = "https://naveenautomationlabs.com/opencart/index.php?route=account/login"

   await page1.goto(url);

   
   const email:Locator = page1.locator("#input-email");
   const password:Locator = page1.locator("#input-password");
   const loginButton:Locator = page1.locator("[value='Login']");

   await email.fill("pwtest@opencart.com");
   await password.fill("playwright@123");
   await loginButton.click();

   console.log("Page Title : ", await page1.title());

   await page1.screenshot({path: 'homepage.png'})

   //browser 2 context
   
   const context2:BrowserContext=await browser.newContext();
   const page2:Page = await context2.newPage();

   await page2.goto(url);
   console.log("second context")

   const email2:Locator = page2.locator("#input-email");
   const password2:Locator = page2.locator("#input-password");
   const loginButton2:Locator = page2.locator("[value='Login']");

   await email2.fill("dinesh@user.com");
   await password2.fill("test@123");
   await loginButton2.click();

   console.log("Page2 Title : ", await page2.title());

   await page2.screenshot({path: 'homepage2.png'})

});

