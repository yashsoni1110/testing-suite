# AI Prompts Guide: Building the Testing Suite

Here are the step-by-step prompts you can use with any AI assistant to recreate this entire testing suite project from scratch.

---

### **Prompt 1: Project Initialization & Configuration**
> "I want to create a Next.js project called `testing-suite` and set up Jest and React Testing Library to write unit tests for my components. Can you give me the exact installation commands to add Jest, `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event`? Also, provide the code I need for `jest.config.js` and `jest.setup.js` to get everything working with Next.js, and tell me how to add a `test` script to my `package.json`."

---

### **Prompt 2: Creating Level 1 (Static) Components**
> "I need to build some basic reusable UI components to test. Please generate three separate functional React components inside a `components/` folder:
> 1. `Button.jsx`: Should return a `<button>` element that displays a `text` prop.
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
