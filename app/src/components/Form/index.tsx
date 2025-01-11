"use client";

// Dependencies
import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../../utilities/tailwind/cn";

// Hooks

// Nested Components
import FormGroup from "./FormGroup";
import FloatInput from "./FloatInput";
import FormErrors from "./FormErrors";
import useTheme from "../../hooks/useTheme";

// Types
export type FormProps = ComponentPropsWithRef<"form">;

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const theme = useTheme();
  const formTheme = theme.global.components.custom.form;

  return (
    <form {...props} ref={ref} className={cn(formTheme.base, props.className)}>
      {props.children}
    </form>
  );
});
Form.displayName = "Form";
export default Form;
export { FormGroup, FloatInput, FormErrors };
