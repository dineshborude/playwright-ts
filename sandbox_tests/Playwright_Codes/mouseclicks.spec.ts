import test from "playwright/test";

test('mouse click tests', async({page}) => {
    const url = "https://demo.guru99.com/test/simple_context_menu.html";

    await page.goto(url,{waitUntil:'load'});
    await page.getByRole('button', { name: 'Double-Click Me To See Alert' }).dblclick();

    await page.getByText('right click me').click({button : 'right'});

})