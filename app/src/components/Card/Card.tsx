"use client";
// Dependencies
import { forwardRef } from "react";

// Components
import {
  Card as MCard,
  CardBody as MCardBody,
  CardHeader as MCardHeader,
  CardFooter as MCardFooter,
  Typography,
} from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import {
  CardFooterProps,
  CardBodyProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
  CardDescriptionProps,
} from "../../types/Components/Card";
import useTheme from "../../hooks/useTheme";

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <MCard {...(props as any)} ref={ref} className={cn(props.className)} />
));
Card.displayName = "Card";
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  (props, ref) => (
    <MCardHeader
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  )
);
CardHeader.displayName = "CardHeader";
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  (props, ref) => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <MCardBody {...(props as any)} ref={ref} className={cn(props.className)} />
  )
);
CardBody.displayName = "CardBody";
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  (props, ref) => (
    <MCardFooter
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      ref={ref}
      className={cn(props.className)}
    />
  )
);
CardFooter.displayName = "CardFooter";
export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  (props, ref) => {
    return (
      <Typography
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        ref={ref}
        variant="h5"
        color="black"
        className={cn(props.className)}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";
export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>((props, ref) => {
  const theme = useTheme();
  const cardTheme = theme.global.components.custom.card;
  return (
    <Typography
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      ref={ref}
      variant="paragraph"
      component="p"
      className={cn(cardTheme.description, props.className)}
    />
  );
});
CardDescription.displayName = "CardDescription";
