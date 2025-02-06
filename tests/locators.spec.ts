import test, { Browser, expect, firefox, Locator, Page } from "playwright/test";

test('locator stratergies', async () => {

    const browser:Browser =  await firefox.launch({headless:false});
    const page:Page = await browser.newPage();

    const url = "https://naveenautomationlabs.com/opencart/index.php?route=account/register";

    await page.goto(url);

    // ID 

    const firstName:Locator = await page.locator('#input-firstname');
    const firstName2:Locator = await page.locator('id=input-firstname');
    await firstName.fill("Danny");
    await firstName2.clear();
    await firstName2.fill("Rambo");

    // Class Name

    const logo:Locator = await page.locator('.img-responsive');
    console.log(await logo.isVisible());

    // Text
    const registerUser:Locator = await page.locator('text=Register Account');
    const header = await registerUser.textContent();
    console.log(header);

    // CSS
    const email:Locator = await page.locator('css=input#input-email');
    const lastname:Locator = await page.locator('css=input[name=lastname]');

    await email.fill('danny@yopmail.com');
    await lastname.fill('Singh');

    const checkbox = await page.locator('css=input[type=checkbox]')
    await checkbox.click();
    console.log("Checked");

    // XPATH 
    
    const searchbox:Locator = await page.locator("xpath=//input[@name='search' and @placeholder='Search']");
    await searchbox.fill('iPhone');

    // Data Test ID
    
})