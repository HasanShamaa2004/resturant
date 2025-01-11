// Dependencies
import { IoIosArrowDown } from "react-icons/io";

// Component
import { Select as MSelect, Option as MOption } from "@material-tailwind/react";
import { SelectOptionProps, SelectProps } from "../../types/Components/Select";
import { RC } from "../../types/vite";

// Types

export const Select: RC<SelectProps> = (props) => {
  return (
    <MSelect
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      className={`${props.className}`}
      labelProps={{
        className: `${props.labelProps} hidden`,
      }}
      arrow={<IoIosArrowDown className="text-white" />}
    ></MSelect>
  );
};

export const Option: RC<SelectOptionProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <MOption {...(props as any)}></MOption>;
};
