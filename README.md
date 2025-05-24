# 🧪 Zealy UI Playwright Test

This repository contains a Playwright-based UI automation test for the [Zealy](https://zealy.io/cw/ztx/questboard/) quest system.

## 📌 Description

The test simulates a user journey through Zealy’s interface, including:

- Opening the main questboard page
- Entering the "Join the ZTX Discord server" mission
- Clicking "Connect to Zealy" and returning via browser back
- Navigating to the `Sprint` tab and verifying the `SHARE ZTX` element
- Navigating to the `Vote` tab and checking for the "no quests" message

Each step captures a screenshot for visual verification.

## 🛠️ Stack

- Playwright
- JavaScript (Node.js)
- Visual Studio Code
- GitHub

## 🧩 Project Structure

```
zealy-ui-playwright-test/
├── tests/
│   └── zealy-ui.spec.js
├── screenshots/
│   └── zealy/
│       ├── step1_main.png
│       ├── step2_mission_open.png
│       ├── step3_connect.png
│       ├── step4_back_to_main.png
│       ├── step5_sprint.png
│       ├── step6_back_to_main_after_sprint.png
│       ├── step7_vote.png
│       └── step8_back_to_main_after_vote.png
├── .gitignore
├── package.json
└── README.md
```

## ✅ How to Run

```bash
npm install
npx playwright test tests/zealy-ui.spec.js
```

> Ensure Chromium is installed via `npx playwright install` if not already available.


## 📸 Screenshots

### Step 1 – Main Page
![Step 1 – Main Page](screenshots/zealy/step1_main.png)

### Step 2 – Mission Open
![Step 2 – Mission Open](screenshots/zealy/step2_mission_open.png)

### Step 3 – Connect to Zealy
![Step 3 – Connect to Zealy](screenshots/zealy/step3_connect.png)

### Step 4 – Back to Main
![Step 4 – Back to Main](screenshots/zealy/step4_back_to_main.png)

### Step 5 – Sprint Tab
![Step 5 – Sprint Tab](screenshots/zealy/step5_sprint.png)

### Step 6 – Back to Main After Sprint
![Step 6 – Back to Main After Sprint](screenshots/zealy/step6_back_to_main_after_sprint.png)

### Step 7 – Vote Tab
![Step 7 – Vote Tab](screenshots/zealy/step7_vote.png)

### Step 8 – Back to Main After Vote
![Step 8 – Back to Main After Vote](screenshots/zealy/step8_back_to_main_after_vote.png)

---

This project was created as part of a QA portfolio to demonstrate UI automation skills using Playwright.
