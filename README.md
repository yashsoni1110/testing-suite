# React Component Testing Suite

Welcome to the React Component Testing Suite! This project demonstrates how to set up and run both unit tests and end-to-end (E2E) tests for React components within a Next.js environment. It uses **Jest** alongside **React Testing Library** for component unit testing, and **Cypress** for end-to-end browser testing.

## 🚀 Features

This project includes 5 distinct React components, covering both basic rendering and complex state interactions, fully tested with Jest:

1. **`Button`** - A simple component that takes a `text` prop.
2. **`Card`** - A structural component that takes a `title` prop.
3. **`Input`** - An input field that takes a `placeholder` prop.
4. **`Counter`** - An interactive component representing state change via button clicks.
5. **`FormInput`** - An interactive form input representing state bindings on user typing.

It also includes **Cypress End-to-End** testing configured to automatically spin up a local development server and verify the functionality and rendering of the homepage.

## 🛠️ Technologies Used

- **Next.js** / **React** (v19)
- **Jest** - JavaScript Unit Testing Framework
- **React Testing Library** (`@testing-library/react`)
- **User Event Library** (`@testing-library/user-event`)
- **Cypress** - End-to-End Testing Framework
- **Start-Server-And-Test** - Utility to manage the dev server during E2E testing

## 📦 Getting Started

First, install the necessary dependencies:

```bash
npm install
```

### Running Unit Tests (Jest)

To execute the unit and component test suite, run:

```bash
npm run test
```

This runs Jest across all `.test.jsx` files in the `__tests__` folder. 

### Running End-to-End Tests (Cypress)

To execute the end-to-end browser tests, run:

```bash
npm run test:e2e
```

This will automatically spin up the Next.js development server on port 3000 and launch the Cypress interactive runner to execute your `home.cy.js` specifications.

## 📂 Project Structure

```
.
├── __tests__
│   ├── Button.test.jsx
│   ├── Card.test.jsx
│   ├── Counter.test.jsx
│   ├── FormInput.test.jsx
│   └── Input.test.jsx
├── components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Counter.jsx
│   ├── FormInput.jsx
│   └── Input.jsx
├── cypress
│   └── e2e
│       └── home.cy.js   # Cypress end-to-end test specs
├── jest.config.js       # Jest configuration mapped to Next.js
├── jest.setup.js        # Imports standard jest-dom matchers
└── package.json
```
