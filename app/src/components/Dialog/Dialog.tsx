"use client";
// Dependencies
import { forwardRef } from "react";

// Components
import {
  Dialog as MDialog,
  DialogBody as MDialogBody,
  DialogHeader as MDialogHeader,
  DialogFooter as MDialogFooter,
  Typography,
} from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import {
  DialogBodyProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogProps,
  DialogTitleProps,
} from "../../types/Components/Dialog";
import useTheme from "../../hooks/useTheme";

export const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => (
  <MDialog {...(props as any)} ref={ref} className={cn(props.className)} />
));

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  (props, ref) => (
    <MDialogHeader
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  )
);

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(
  (props, ref) => (
    <MDialogBody
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  )
);

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>(
  (props, ref) => (
    <MDialogFooter
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  )
);

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(
  (props, ref) => {
    const theme = useTheme();
    const dialogTheme = theme.global.components.custom.dialog;
    return (
      <Typography
        {...(props as any)}
        ref={ref}
        variant="h5"
        color="black"
        className={cn(dialogTheme.title, props.className)}
      />
    );
  }
);

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>((props, ref) => {
  const theme = useTheme();
  const dialogTheme = theme.global.components.custom.dialog;
  return (
    <Typography
      {...(props as any)}
      ref={ref}
      variant="paragraph"
      component="p"
      className={cn(dialogTheme.description, props.className)}
    />
  );
});
