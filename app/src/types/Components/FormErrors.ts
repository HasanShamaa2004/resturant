import { ComponentPropsWithRef } from "react";

export type FormErrorsProps = ComponentPropsWithRef<"div"> & {
    errors?: Record<string, string>;
  };