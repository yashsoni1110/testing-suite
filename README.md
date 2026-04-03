# Testing Suite — Component Testing & Storybook

A comprehensive React component development project built with **Next.js**, featuring unit testing with **Jest + React Testing Library** and an isolated component library with **Storybook**.

## 🚀 Features

### Unit Testing (Jest + React Testing Library)
5 React components with full test coverage:

| Component | Type | Props/Features |
|---|---|---|
| **Button** | Static | `label`, `variant` (primary/secondary), `disabled`, `onClick` |
| **Card** | Static | `title` |
| **Input** | Static | `placeholder` |
| **Counter** | Interactive | `useState` — increment count on button click |
| **FormInput** | Interactive | `useState` — controlled input with `onChange` |

### Storybook (Component Library)
An isolated development environment for building and previewing UI components:

| Story | Variants | Args/Controls |
|---|---|---|
| **Button** | Primary, Secondary, Disabled | `label` (text), `variant` (radio), `disabled` (boolean), `onClick` (action) |
| **Input** | Default, WithValue | `placeholder` (text) |
| **Counter** | Default | Interactive increment button |

**Features:**
- ✅ Toggle Button between Primary, Secondary, and Disabled from the control panel
- ✅ Dark/Light mode background toggle in Storybook toolbar
- ✅ Click action logging in the Actions panel

### Cypress E2E Testing
End-to-end browser testing configured with Cypress to verify homepage rendering.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16 | React framework |
| React | 19 | UI library |
| Storybook | 10 | Isolated component development |
| Jest | 29 | Unit testing framework |
| React Testing Library | 16 | Component testing utilities |
| Tailwind CSS | 4 | Utility-first styling |
| Cypress | 15 | End-to-end testing |

## 📦 Getting Started

Install dependencies:

```bash
npm install
```

### Run the Next.js App

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Run Storybook (Component Library)

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006) — runs independently without the Next.js app.

### Run Unit Tests (Jest)

```bash
npm test
```

Runs all 5 test suites in the `__tests__/` folder.

### Run E2E Tests (Cypress)

```bash
npm run test:e2e
```

Starts the dev server and launches Cypress to run `home.cy.js`.

### Build Storybook (for deployment)

```bash
npm run build-storybook
```

Generates a `storybook-static/` folder that can be deployed to Vercel or Netlify.

## 📂 Project Structure

```
testing-suite/
├── .storybook/
│   ├── main.js                # Storybook config (stories, addons, framework)
│   └── preview.js             # Global CSS, dark/light backgrounds, controls
├── components/
│   ├── Button.jsx             # Button component
│   ├── Button.stories.jsx     # Button stories (Primary, Secondary, Disabled)
│   ├── Card.jsx               # Card component
│   ├── Counter.jsx            # Counter component (stateful)
│   ├── Counter.stories.jsx    # Counter story
│   ├── FormInput.jsx          # FormInput component (controlled input)
│   ├── Input.jsx              # Input component
│   └── Input.stories.jsx      # Input stories (Default, WithValue)
├── __tests__/
│   ├── Button.test.jsx        # Button renders with label prop
│   ├── Card.test.jsx          # Card renders with title prop
│   ├── Counter.test.jsx       # Counter increments on click (userEvent)
│   ├── FormInput.test.jsx     # FormInput updates on typing (userEvent)
│   └── Input.test.jsx         # Input renders with placeholder prop
├── cypress/
│   └── e2e/
│       └── home.cy.js         # E2E test for homepage
├── jest.config.cjs            # Jest configuration for Next.js
├── jest.setup.js              # Imports @testing-library/jest-dom
├── cypress.config.js          # Cypress configuration
└── package.json
```

## 🧪 Test Results

```
 PASS  __tests__/Button.test.jsx
 PASS  __tests__/Card.test.jsx
 PASS  __tests__/Input.test.jsx
 PASS  __tests__/Counter.test.jsx
 PASS  __tests__/FormInput.test.jsx

Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
```

## 🌐 Deployment

- **Storybook** deployed on Vercel with build command `npm run build-storybook` and output directory `storybook-static`
