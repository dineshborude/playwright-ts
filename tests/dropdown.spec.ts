import test, { Browser, chromium, Locator, Page } from "playwright/test";

test('dropdown handling', async() => {

   const browser:Browser = await chromium.launch({headless:false});
   const page:Page = await browser.newPage(); 

   const url = "https://www.saucedemo.com/";

   const username = "standard_user";
   const password = "secret_sauce";

   const usernameField:Locator = page.locator("#user-name");
   const passwordField:Locator = page.locator('id = password');
   

   await page.goto(url);

   await usernameField.fill(username);
   await passwordField.fill(password);



   await page.waitForTimeout(5000);

});