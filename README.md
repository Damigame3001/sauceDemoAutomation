# 🧪 SauceDemo QA Technical Assessment

## 📁 Project Structure

```
cypress/
│
├── downloads/
│
├── e2e/
│   ├── problem_user.cy.js
│   └── standard_user.cy.js
│
├── fixtures/
│   └── example.json
│
├── reports/
│   ├── assets/
│   └── screenshots/
│       ├── index_001.html
│       └── index.html
│
├── screenshots/
│   └── problem_user.cy.js/
│       ├── SauceDemo A...png
│       ├── SauceDemo A...png
│       ├── SauceDemo A...png
│       ├── SauceDemo A...png
│       └── SauceDemo A...png
│
├── support/
│   ├── commands.js
│   └── e2e.js
│
├── postman/
│   └── user-collection.json
│
├── cypress.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
└── README.md

```

---

## ✅ How to Run Cypress Tests

### Prerequisites

* Node.js (v14+)
* npm (v6+)

### Installation

```bash
git clone https://github.com/Damigame3001/sauceDemoAutomation.git
cd sauceDemoAutomation
npm install
```

### Running Cypress Tests

```bash
# For GUI
yarn cypress open
# or
npx cypress open

# For headless run
npx cypress run
```

---

## 🧪 API Testing Instructions (Postman)

* Collection Path: `/postman/user-collection.json`

### Run via Postman:

* Import the collection manually and run it

### Run via Newman:

```bash
newman run postman/users-collection.json
```

---

## 📌 Strategy

### Test Techniques Used

* Exploratory Testing
* Boundary Value Analysis
* Positive & Negative Testing
* UI Automation with Cypress
* API Testing with Postman

### Scope

* Manual + Automated UI testing on [https://www.saucedemo.com/](https://www.saucedemo.com/)
* Only the `Users` endpoint was tested in API
* Devices: Desktop (1366x768), Mobile (iPhone X viewport)

### Test Execution Methodology

* Manual testing was performed for all specified modules using both `standard_user` and `problem_user`
* Test cases were documented in Excel and executed
* UI automated tests were created using Cypress
* API tests were implemented in Postman and exported as a collection

Modules tested:

* Login (standard\_user, problem\_user)
* Add and remove products from cart
* Filter functionality (Name A-Z, Z-A, Price Low-High, High-Low)
* View Cart
* Checkout

---

## 📝 Notes: Prerequisites, Observations & Blockers

### ✅ Prerequisites to Run Cypress Automation

#### System Requirements

* Node.js (v14+)
* npm (v6+)

#### Installation Steps

```bash
# Clone the repo
git clone https://github.com/Damigame3001/sauceDemoAutomation.git

# Navigate into the project directory
cd sauceDemoAutomation

# Install all dependencies
npm install
```

#### Run Cypress Tests

To open the Cypress GUI:

```bash
npx cypress open
```

To run tests headlessly:

```bash
npx cypress run
```

---

### 👀 Observations – `standard_user`

| Area                | Observation                                    |
| ------------------- | ---------------------------------------------- |
| ✅ Login             | Successful with correct credentials            |
| ✅ Add/Remove Cart   | Works perfectly. Cart badge updates instantly  |
| ✅ Filter Products   | Sorting by Name and Price works as expected    |
| ✅ View Cart         | Displays selected items correctly              |
| ✅ Checkout          | Complete checkout flow works smoothly          |
| ✅ Responsive Design | No major issues observed on standard viewports |

---

### ⚠️ Observations & Bugs – `problem_user`

| Area                 | Observation / Bug                                                       |
| -------------------- | ----------------------------------------------------------------------- |
| 🐞 Login             | Login succeeds, but product images fail to load (broken `src`)          |
| 🐞 Add/Remove Cart   | "Remove" button shows even for items not added to cart                  |
| 🐞 Cart Badge        | Badge sometimes doesn’t reflect correct count unless refreshed manually |
| 🐞 Filter Products   | Items don’t visually update when filter is applied                      |
| 🐞 View Cart         | Placeholder images or broken UI shown                                   |
| 🐞 Checkout          | Layout glitches on small screens                                        |
| 🐞 Responsive Design | Overlapping elements and spacing issues on mobile                       |

---

### 🚫 Blockers

| Issue                       | Details                                                           |
| --------------------------- | ----------------------------------------------------------------- |
| Product images missing      | Cannot reliably verify product thumbnails for `problem_user`      |
| Cart badge inconsistency    | Requires visual/manual confirmation beyond automation reliability |
| Sorting not reflected in UI | No observable DOM change – backend validation required            |

---

### 🛠 Suggested Workarounds

* Use `.should()` with timeout for retrying flaky UI updates
* Add `cy.screenshot()` for any test failure to capture UI issues
* Use `cy.viewport()` to validate responsive design behaviors
* Suggest adding test IDs or consistent selectors for all interactive elements

---

## 🔗 Documentation References

* 📊 [View Test Cases in Google Sheets](https://docs.google.com/spreadsheets/d/1pw0j34KkYLDa-Ic5hA34gtTB0FkW-6XBbMomBMT453s/edit?gid=419170681#gid=419170681)
* 🐛 [View Defect Report in Google Sheets](https://docs.google.com/spreadsheets/d/1y5zfYjV22GZ8pdOQSM85kEjz0NeaOZDvxQFOhwrRQPM/edit?gid=1149601011#gid=1149601011)

---

For any clarifications or updates, please contact the tester or reviewer via the GitHub repository or attached email thread.
