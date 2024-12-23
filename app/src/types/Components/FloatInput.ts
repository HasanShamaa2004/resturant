import type {
    variant,
    color,
    size,
    label,
    error,
    success,
    icon,
    labelProps,
    containerProps,
    shrink,
    className,
  } from "@material-tailwind/react/types/components/input";
import { ComponentPropsWithRef } from "react";

export type FloatInputProps = ComponentPropsWithRef<"input"> & {
    variant?: variant;
    size?: size;
    color?: color;
    label?: label;
    error?: error;
    success?: success;
    icon?: icon;
    labelProps?: labelProps;
    containerProps?: containerProps;
    className?: className;
    shrink?: shrink;
    inputRef?: React.Ref<HTMLInputElement>;
  };