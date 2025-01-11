"use client";

// Dependencies
import { forwardRef } from "react";

// Utils
import { cn } from "../../utilities/tailwind/cn";
import useTheme from "../../hooks/useTheme";

// Types
import { FormGroupProps } from "../../types/Components/FormGroup";

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const isDouble = props.double == false || !props.double ? false : true;
  const theme = useTheme();
  const formTheme = theme.global.components.custom.form;
  return (
    <div
      {...props}
      ref={ref}
      className={cn(
        formTheme.form_group.base,
        isDouble && formTheme.form_group.double,
        props.className
      )}
    >
      {props.children}
    </div>
  );
});
FormGroup.displayName = "FormGroup";
export default FormGroup;
