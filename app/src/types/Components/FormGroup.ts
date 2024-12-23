import { ComponentPropsWithRef } from "react";

export type FormGroupProps = ComponentPropsWithRef<"div"> & {
    double?: string | boolean;
  };