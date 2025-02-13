import { test, expect } from "@playwright/test";

test("drag and drop test", async ({ page }) => {
    const url = "https://jqueryui.com/draggable/";
    
    // 1️⃣ Go to the page
    await page.goto(url, { waitUntil: "load" });

    // 2️⃣ Wait for iframe and get the frame
    const frame = await page.frameLocator("iframe").first();

    // 3️⃣ Locate the draggable element inside the iframe
    const dragElement = frame.locator("#draggable"); // ✅ Correct ID-based locator

    // 4️⃣ Drag and drop action
    await dragElement.dragTo(frame.locator("#draggable"), { force: true });

    // 5️⃣ Optional: Wait to see the action
    await page.waitForTimeout(3000);
});
