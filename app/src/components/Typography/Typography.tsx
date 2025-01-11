"use client";

// Dependencies
import { forwardRef } from "react";

// Hooks

// Component
import { Typography as MTypography } from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import { TypographyProps } from "../../types/Components/Typography";
import useTheme from "../../hooks/useTheme";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Typography = forwardRef<any, TypographyProps | any>((props, ref) => {
  const theme = useTheme().global.components.custom.typography;
  return (
    <MTypography
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      ref={ref}
      className={cn(theme.base, props.className)}
    ></MTypography>
  );
});
Typography.displayName = "Typography";
export default Typography;
