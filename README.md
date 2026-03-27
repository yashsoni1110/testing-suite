# React Component Testing Suite

Welcome to the React Component Testing Suite! This project demonstrates how to set up and run unit tests for React components within a Next.js environment. It uses **Jest** as the test runner and **React Testing Library** for rendering components and simulating user interactions.

## 🚀 Features

This project includes 5 distinct React components, covering both basic rendering and complex state interactions:

1. **`Button`** - A simple component that takes a `text` prop.
2. **`Card`** - A structural component that takes a `title` prop.
3. **`Input`** - An input field that takes a `placeholder` prop.
4. **`Counter`** - An interactive component representing state change via button clicks.
5. **`FormInput`** - An interactive form input representing state bindings on user typing.

Each component is accompanied by a comprehensive test suite under the `__tests__` directory.

## 🛠️ Technologies Used

- **Next.js** / **React** (v19)
- **Jest** - JavaScript Testing Framework
- **React Testing Library** (`@testing-library/react`)
- **User Event Library** (`@testing-library/user-event`)

## 📦 Getting Started

First, install the necessary dependencies:

```bash
npm install
```

### Running the Tests

To execute the test suite, simply run:

```bash
npm run test
```

This will run Jest in the terminal, looking for all `.test.jsx` files in the `__tests__` folder. You will see an output verifying that all 5 test suites pass successfully.

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
├── jest.config.js       # Jest configuration mapped to Next.js
├── jest.setup.js        # Imports standard jest-dom matchers
└── package.json
```
