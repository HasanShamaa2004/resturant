"use client";

// Dependencies
import { forwardRef } from "react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Types
import { FormErrorsProps } from "../../types/Components/FormErrors";
// Icons
import { FiAlertTriangle } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const FormErrors = forwardRef<HTMLDivElement, FormErrorsProps>(function (
  props,
  ref
) {
  const errors = Object.values(props.errors ?? {});

  // عُد null بدلاً من false إذا لم يكن هناك أخطاء
  if (errors.length === 0) return null;
  const theme = useTheme();
  const formTheme = theme.global.components.custom.form;

  return (
    <div
      ref={ref}
      {...props}
      className={cn(formTheme.form_errors.base, props.className)}
    >
      {errors.map((error, index) => (
        <p
          key={`${error} + ${index * Math.random()}`}
          className={formTheme.form_errors.error.base}
        >
          <FiAlertTriangle />
          {error}
        </p>
      ))}
    </div>
  );
});

export default FormErrors;
