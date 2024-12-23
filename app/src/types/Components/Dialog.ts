import type { ComponentPropsWithRef } from "react";


export type DialogProps = ComponentPropsWithRef<"div"> & {
    open: boolean; // إضافة خاصية open
    handler: () => void; // إضافة خاصية handler
  };
  export type DialogHeaderProps = ComponentPropsWithRef<"div">;
  export type DialogBodyProps = ComponentPropsWithRef<"div">;
  export type DialogFooterProps = ComponentPropsWithRef<"div">;
  export type DialogTitleProps = ComponentPropsWithRef<"h2">;
  export type DialogDescriptionProps = ComponentPropsWithRef<"p">;