import { test, expect, Locator } from "playwright/test";

test('dropdown handling', async ({ page }) => {
   const url = "https://www.saucedemo.com/";
   
   await page.goto(url, { waitUntil: "load" }); 


   const username = "standard_user";
   const password = "secret_sauce";

   const usernameField: Locator = page.locator("#user-name");
   const passwordField: Locator = page.locator("#password"); 
   const loginButton = page.getByTestId("login-button"); 
   const dropdownField = 'select.product_sort_container';

   await page.goto(url);
   await usernameField.fill(username);
   await passwordField.fill(password);
   await loginButton.click();
   await page.selectOption(dropdownField, {label : 'Price (high to low)'});


   await page.waitForTimeout(5000);
});
