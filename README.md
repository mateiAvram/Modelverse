# Modelverse Website

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2F425E?style=for-the-badge&logo=playwright&logoColor=white)
![Status](https://img.shields.io/badge/Status-Stable%20Release-green)

The official static website for the Modelverse cybersecurity platform, built with modern web technologies for performance and maintainability.

This repository hosts the front-end source code for the Modelverse platform's official online presence. As a static site built with **React** and **TypeScript**, its design prioritizes security, speed, and ease of deployment, serving as the main information hub for our platform.

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Testing](#testing)
  - [Running Tests](#running-tests)
  - [Viewing Test Results](#viewing-test-results)
  - [Creating New Tests](#creating-new-tests)
- [Build & Deployment](#build--deployment)
- [GitHub Workflow & Contributing](#github-workflow--contributing)
- [Contact](#contact)

---

## Technologies Used

This project is a static website built with a modern frontend stack designed for performance, security, and maintainability.

The core technologies are:

- **Frontend Framework:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Testing:** [Playwright](https://playwright.dev/)
- **Package Manager:** **npm**
- **Build Tool:** **Vite**

---

Great. The **Getting Started** section is arguably the most important part of your README, as it tells a user exactly how to take the code from GitHub and run it locally.

This section will be broken into three subsections: **Prerequisites**, **Installation**, and **Running Locally**.

---

## Getting Started

Follow these step-by-step instructions to get a copy of the **Modelverse Website** up and running on your local machine for development, testing, or review.

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- **Git**
- **Node.js:** v.22.x (lts)
- **npm:** (comes bundled with Node.js)

### Installation

1.  **Clone the repository**
    Open your terminal or command prompt and run the following command to download the source code:
    ```bash
    git clone https://github.com/YourUsername/your-repo-name.git
    ```
2.  **Navigate into the project directory**
    Change into the newly created folder:
    ```bash
    cd your-repo-name
    ```
3.  **Install dependencies**
    Install all required packages listed in `package.json`:
    ```bash
    npm install
    ```

### Running Locally

After successful installation, you can start the development server:

1.  **Start the development server**

    Run the command to compile the code and serve the application locally:

    ```bash
    npm run dev
    ```

2.  **View the application**

    Open your web browser and navigate to:

    ```
    http://localhost:5173
    ```

    The website should now be running locally.

---

That's great\! You can make the **Running Tests** section much cleaner by focusing only on the commands needed to execute and view the results, which is all a user cares about when they clone the repo.

Here is a simplified and improved version of the **Running Tests** section for your `README.md`:

---

## Testing

The **Modelverse Website** uses **Playwright** for testing to ensure application stability and proper functionality.

### Running Tests

Open a **terminal window** in the project's root directory and run the following command to execute all tests:

```bash
npx playwright test
```

The playwright config file already has the **webServer** option enabled so you **do not** need to run the server locally prior to running the tests.

### Viewing Test Results

After the tests are complete, you can review the detailed, interactive report in your web browser by accessing the following link:

```bash
http://localhost:9323
```

That's an excellent addition\! A section on creating new tests is crucial for maintainers and contributors. It clearly outlines the structure and process for maintaining quality assurance.

Here is the markdown for the **Creating New Tests** section, designed to follow your existing **Running Tests** section:

### Creating New Tests

New test files should follow the project conventions to ensure consistency and maintainability.

**Text Structure and Location:**

- **File Location:** All Playwright test files must be placed within the `tests/` directory at the root of the project.
- **File Naming:** Test files should be named using the format `[feature-name].test.ts` (e.g., `navigation.spec.ts` or `contact-form.spec.ts`).

**Example Test File:**

```typescript
// tests/app.test.ts
import { test, expect } from '@playwright/test';

test('hello world', async ({ page }) => {
  await page.goto('');

  // 1. Check if website title is "Modelverse".
  await expect(page).toHaveTitle('Modelverse');

  // 2. Check if the root element has any children.
  const rootHasChildren = await page
    .locator('#root')
    .evaluate((root) => root.children.length > 0);
  expect(rootHasChildren).toBe(true);
});
```

---

## Build & Deployment

The Modelverse website is a static, client-side application built using **Vite** and **Rollup**. The application needs to be compiled into static assets before being deployed to a web server.

### 1\. Building the project

To generate the optimized static files, run the standard build script:

```bash
npm run build
```

This command performs the following actions:

1.  It executes the Vite/Rollup bundler.
2.  It bundles, transpiles, and optimizes all React, TypeScript, and CSS assets.
3.  It outputs the final, minified static files (HTML, CSS, JS, etc.) into the **`dist/`** directory.

The contents of the **`dist/`** folder are the files that should be hosted on a web server.

### 2\. Locally Previewing the Build

To test the generated production build exactly as it will appear live, you can use the built-in preview command:

```bash
npm run preview
```

This command will:

1.  Start a minimal local web server.
2.  Serve the optimized files directly from the **`dist/`** folder.
3.  The console will provide a local URL (e.g., `http://localhost:4173`) to view the production site in your browser.

### 3\. Locally deploying to Firebase (NOT Recommended)

- Install the **Firebase CLI** globally on your machine if not already installed:
  ```bash
  npm install -g firebase-tools
  ```
- Log into your Firebase account via the CLI:

  ```bash
  firebase login
  ```

- To deploy first **build** the application and then run the command:
  ```bash
  firebase deploy
  ```

---

## GitHub Workflow & Contributing

---

## Contact
