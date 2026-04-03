# AI Prompts Guide: Building the Testing Suite

Here are the step-by-step prompts used to build this entire testing suite project from scratch.

---

### **Prompt 1: Project Initialization & Configuration**
> "I want to create a Next.js project called `testing-suite` and set up Jest and React Testing Library to write unit tests for my components. Can you give me the exact installation commands to add Jest, `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event`? Also, provide the code I need for `jest.config.js` and `jest.setup.js` to get everything working with Next.js, and tell me how to add a `test` script to my `package.json`."

---

### **Prompt 2: Creating Level 1 (Static) Components**
> "I need to build some basic reusable UI components to test. Please generate three separate functional React components inside a `components/` folder:
> 1. `Button.jsx`: Should return a `<button>` element that displays a `label` prop. It should also accept `variant` (primary/secondary), `disabled`, and `onClick` props.
> 2. `Card.jsx`: Should return an `<h2>` element that displays a `title` prop.
> 3. `Input.jsx`: Should return an `<input>` element that uses a `placeholder` prop.
> Keep them very simple without CSS for now."

---

### **Prompt 3: Writing Level 1 Tests**
> "Now, please write Jest unit tests for these three components under a `__tests__/` directory. Create `Button.test.jsx`, `Card.test.jsx`, and `Input.test.jsx`. The tests should render the components with some sample props and use `screen.getByText` or `screen.getByPlaceholderText` to assert that they render into the document successfully."

---

### **Prompt 4: Creating Level 2 (Interactive) Components**
> "Let's move on to components that use React state (`useState`). Please generate two new files in the `components/` folder:
> 1. `Counter.jsx`: Should display a count (starting at 0) in a `<p>` tag, and a button that increments the count when clicked.
> 2. `FormInput.jsx`: Should display an `<input>` element that controls its value through state and updates it using an `onChange` handler. Add a placeholder 'Type here' to it."

---

### **Prompt 5: Writing Level 2 Tests (Simulating User Interactions)**
> "Finally, write the test suites for these interactive components. Create `Counter.test.jsx` and `FormInput.test.jsx` inside the `__tests__/` folder.
> 
> You MUST use `@testing-library/user-event`.
> For the Counter test: simulate clicking the increment button using `userEvent.click` and assert that the text changes from '0' to '1'.
> For the FormInput test: simulate typing 'Hello' into the input using `userEvent.type`, and assert that the input value changes to 'Hello' using `expect().toHaveValue()`."

---

### **Prompt 6: Adding Cypress End-to-End Testing**
> "Now I want to add Cypress to the project to handle automated end-to-end browser testing for my application layout. Please tell me how to install `cypress` alongside `start-server-and-test`. Then give me the code to create an initial E2E test file in `cypress/e2e/home.cy.js` that visits the homepage (`http://localhost:3000`) and asserts that 'To get started' is visible. Finally, please provide the exact `package.json` scripts I need: one to open Cypress (`cy`) and another to run `start-server-and-test` which starts my local dev server and runs my Cypress tests together (`test:e2e`)."

---

### **Prompt 7: Setting Up Storybook (Level 1)**
> "I want to set up Storybook in my existing Next.js project to build and preview UI components in isolation. Please run `npx storybook@latest init` to initialize Storybook. Then create story files for at least 3 of my existing components:
> 1. `Button.stories.jsx` — with Primary, Secondary, and Disabled variants.
> 2. `Input.stories.jsx` — with Default and WithValue variants.
> 3. `Counter.stories.jsx` — with a Default variant.
> Place the stories alongside the components in the `components/` folder and make sure `.storybook/main.js` is configured to discover them."

---

### **Prompt 8: Configuring Storybook Args & Controls (Level 2)**
> "Configure the Button story with `argTypes` so that users can toggle between variants from the Storybook control panel:
> - `variant`: radio control with options `primary` and `secondary`
> - `disabled`: boolean toggle
> - `onClick`: action that logs 'clicked' in the Actions tab
> Also import the global CSS in `.storybook/preview.js` to make sure Tailwind styles work inside Storybook."

---

### **Prompt 9: Adding Dark/Light Mode Backgrounds (Level 2)**
> "Configure Storybook's background toggles in `.storybook/preview.js` so I can preview how my components look in both Light Mode and Dark Mode. Add two background options:
> - Light: `#ffffff`
> - Dark: `#000000`
> Make sure the backgrounds config is inside the `preview` object's `parameters`, not as a separate export."

---

### **Prompt 10: Deploying Storybook to Vercel**
> "Build and deploy my Storybook to Vercel. Use `npm run build-storybook` as the build command and `storybook-static` as the output directory. Make sure the `.storybook/main.js` uses forward slashes in `staticDirs` for Linux compatibility, and file names have the correct casing for case-sensitive file systems."
