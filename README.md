# Playwright Framework [DEV - IN PROGRESS]

This repository contains a **Playwright framework setup** for automated testing.  
The framework is structured as follows:


---

## **📜 Description of Files & Folders**
### **🔹 Configuration & Setup Files**
- **`.eslintrc.json`** → ESLint configuration for TypeScript linting.
- **`.gitignore`** → Specifies untracked files to ignore in Git.
- **`package-lock.json & package.json`** → Define Node.js dependencies.
- **`playwright.config.ts`** → Playwright configuration settings.
- **`requirements.md`** → Document outlining project requirements.
- **`tsconfig.json`** → TypeScript compiler options.

---

### **🔹 Continuous Integration (CI/CD) **
- **`.github/workflows/main.yml`** → GitHub Actions workflow file for running tests automatically.

---

### **🔹 Framework Core Folders**
#### **📁 `node_modules/`**
Contains all **Node.js dependencies** installed using `npm install`.

#### **📁 `playwright-report/`**
Stores **test execution reports** generated by Playwright.

#### **📁 `src/` (Source Code)**
Main folder containing project files.

- **`api/`** → API automation scripts.
- **`config/`** → Environment configuration files & authentication details.
- **`fixtures/`** → Reusable test fixtures like login functions.
- **`logging/`** → Logs generated during test execution.
- **`pages/`** → Page Object Model (POM) files for different application pages.
- **`testdata/`** → Test data files in JSON, CSV, or other formats.
- **`tests/`** → **All test scripts written in TypeScript.**
- **`utils/`** → Utility functions like encryption & logging.
- **`test-results/`** → Stores test execution results, screenshots, and traces.

---

## **🚀 Usage Guide**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/dineshborude/playwright-ts.git
cd playwright-ts
```


## **🚀 Installation & Setup**

### **1️⃣ Install Dependencies**
```sh
npm install
```

### **2️⃣ Run Tests**
```sh
npm test
```
or
```sh
npx playwright test
```

### **3️⃣ View Test Reports**
After running tests, reports can be found in:  
📁 **`playwright-report/`**  

To open the report:
```sh
npx playwright show-report
```

### **4️⃣ Explore the Source Code**
- Modify test cases in the `tests/` directory.
- Add new Page Objects in the `pages/` directory.
- Use `testdata/` for external test data


---

