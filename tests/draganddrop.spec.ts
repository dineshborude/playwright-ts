import { test, expect, FrameLocator, Locator } from "playwright/test";

test("drag and drop test", async ({ page }) => {
    const url = "https://jqueryui.com/droppable/";
    
    // Open the page
    await page.goto(url, { waitUntil: "load" });

    // Get the iframe
    const frame: FrameLocator = page.frameLocator(".demo-frame");

    // Get the drag & drop elements inside the iframe
    const drag: Locator = frame.locator("#draggable");
    const drop: Locator = frame.locator("#droppable");

    // Perform drag and drop action
    await drag.dragTo(drop);

    // Optional: Wait to observe
    await page.waitForTimeout(3000);
});
