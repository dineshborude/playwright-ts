import { test,expect, chromium, Browser, Page, Locator, BrowserContext } from "@playwright/test";



test('login test', async() => {

   const browser:Browser = await chromium.launch({headless:false});
   const context:BrowserContext=await browser.newContext();
   const page:Page = await context.newPage();
   const url = "https://naveenautomationlabs.com/opencart/index.php?route=account/login"

   await page.goto(url);
});


test('dsdsds',async()=>{

})