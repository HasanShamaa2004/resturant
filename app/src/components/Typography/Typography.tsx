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

const Typography = forwardRef<any, TypographyProps | any>((props, ref) => {
  const theme = useTheme().global.components.custom.typography;
  return (
    <MTypography
      {...(props as any)}
      ref={ref}
      className={cn(theme.base, props.className)}
    ></MTypography>
  );
});

export default Typography;
