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

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const theme = useTheme().global.components.custom.label;
  return (
    <Typography
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      as="label"
      {...props}
      ref={ref}
      className={cn(theme.base, props.className)}
    ></Typography>
  );
});
Label.displayName = "Label";
export default Label;
