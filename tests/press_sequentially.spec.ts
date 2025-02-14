import test, { Locator } from "playwright/test";

test('type slowly test', async ({page}) => {
    const url = "https://www.flipkart.com/";
    const searchbox:Locator = page.getByRole('textbox', { name: 'Search for Products, Brands' });

    await page.goto(url,{waitUntil:'load'});
    await searchbox.pressSequentially('iphone',{delay:500});

    await searchbox.type



})