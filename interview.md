# **Playwright Interview Questions**
### **1. Browser VS Browser Engine**


| **Feature**      | **Browser**                              | **Browser Engine**                        |
|-----------------|--------------------------------------|-------------------------------------|
| **Definition**  | A full application for browsing the web | The core component that renders web pages |
| **Examples**   | Chrome, Firefox, Safari, Edge      | Blink (Chrome), Gecko (Firefox), WebKit (Safari) |
| **What It Does** | Provides UI, tabs, navigation, settings, extensions, and more | Parses HTML, applies CSS, executes JavaScript, and renders pages |
| **Controlled by Playwright?** | ✅ Yes | ❌ No (indirectly via browsers) |

---

## 2. What Does Playwright Use?  
✅ **Playwright uses full browsers** (Chromium, Firefox, WebKit).  
✅ These browsers internally rely on their **browser engines** (Blink, Gecko, WebKit).  
❌ Playwright **does not** directly interact with browser engines—it controls browsers that embed them.  


#### Example in Playwright

When you run:  

```js
const { chromium } = require('@playwright/test');
const browser = await chromium.launch();
```
Playwright launches Chromium (a browser).
Chromium then uses the Blink engine internally.
So, Playwright interacts with browsers, which rely on their engines.

---