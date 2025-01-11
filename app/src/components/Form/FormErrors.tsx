"use client";

import { forwardRef } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { cn } from "../../utilities/tailwind/cn";

export type FormErrorsProps = {
  message?: string;
  className?: string;
};

const FormErrors = forwardRef<HTMLDivElement, FormErrorsProps>(function (
  props,
  ref
) {
  if (!props.message) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "bg-red border border-red-400 text-red-700 px-4 py-3 rounded relative",
        props.className
      )}
      role="alert"
    >
      <div className="flex items-center gap-2">
        <FiAlertTriangle className="w-5 h-5" />
        <span>{props.message}</span>
      </div>
    </div>
  );
});

FormErrors.displayName = "FormErrors";
export default FormErrors;
