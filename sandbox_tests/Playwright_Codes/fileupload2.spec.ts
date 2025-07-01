
import {Browser, chromium, expect, Page, test} from '@playwright/test';

test('file upload test', async () => {

    const browser:Browser = await chromium.launch();
    const page:Page = browser.newPage();
    const path: ("C:\Users\dines\OneDrive\Documents");
    const uploadField: page.locator('#uploadHere');
    

    page.goto("https://www.google.com");

    expect(uploadField)

    await uploadField.inputFile(path);

   


})
