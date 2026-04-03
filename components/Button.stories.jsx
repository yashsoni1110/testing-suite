import Button from "./Button";

export default {
  title: "Test/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    disabled: { control: "boolean" },
  },
};

export const Primary = {
  args: {
    label: "Click Me",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};