"use client";
// Dependencies
import { forwardRef } from "react";

// Hooks

// Components
import { Input } from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";
import useTheme from "../../hooks/useTheme";

// Types
import { FloatInputProps } from "../../types/Components/FloatInput";

const FloatInput = forwardRef<HTMLInputElement, FloatInputProps>(
  (props, ref) => {
    const theme = useTheme();
    const formTheme = theme.global.components.custom.form;
    return (
      <Input
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        className={cn(formTheme.float_input.base, props.className)}
        inputRef={ref}
      />
    );
  }
);
FloatInput.displayName = "FloatInput";
export default FloatInput;
