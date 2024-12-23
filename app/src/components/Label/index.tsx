"use client";

// Dependencies
import { forwardRef } from "react";

// Components
import Typography from "../Typography/Typography";

// Hooks

// tailwind utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import type { ComponentPropsWithRef } from "react";
import useTheme from "../../hooks/useTheme";

export type LabelProps = ComponentPropsWithRef<"label">;

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, _ref) => {
  const theme = useTheme().global.components.custom.label;
  return (
    <Typography
      as="label"
      {...props}
      className={cn(theme.base, props.className)}
    ></Typography>
  );
});

export default Label;
