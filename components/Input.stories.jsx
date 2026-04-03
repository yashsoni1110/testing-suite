import Input from "./Input";

export default {
  title: "Test/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
  },
};

export const Default = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithValue = {
  args: {
    placeholder: "Typing...",
  },
};