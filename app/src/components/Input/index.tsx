"use client";

// Dependencies
import { forwardRef } from "react";

// Hooks

// Components
import { Input as MInput } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";

// Utils
import { cn } from "../../utilities/tailwind/cn";

// Icons
import { IoMdInformationCircleOutline } from "react-icons/io";

// Types
import { InputProps } from "../../types/Components/Input";
import useTheme from "../../hooks/useTheme";

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const theme = useTheme().global.components.custom.input;

  return (
    <div className="relative flex items-center gap-2">
      <MInput
        containerProps={{ className: props.containerProps }}
        {...(props as any)}
        ref={ref}
        className={cn(
          theme.base,
          theme.focus,
          props.error ? theme?.error : "",
          props.className
        )}
        labelProps={{
          className: `hidden ${props.labelProps} `,
        }}
      />
      {props.error && (
        <span>
          <Tooltip content={props.error}>
            <button type="button">
              <IoMdInformationCircleOutline />
            </button>
          </Tooltip>
        </span>
      )}
    </div>
  );
});

export default Input;
