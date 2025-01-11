"use client";
// Dependencies
import { forwardRef } from "react";

// Components
import { Button as MButton } from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import { ButtonProps } from "../../types/Components/Button";
import useTheme from "../../hooks/useTheme";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const theme = useTheme();
  const buttonTheme = theme.global.components.custom.button;

  return (
    <MButton
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      ref={ref}
      color={props.color}
      className={cn(buttonTheme.base, props.className)}
    >
      {props.children}
    </MButton>
  );
});

Button.displayName = "Button";

export default Button;
