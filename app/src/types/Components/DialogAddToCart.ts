export interface DialogAddToCartProps {
  id: number
    open: boolean;
    setOpen: (open: boolean) => void;
    photo: string;
    price: string;
    title: string;
    size: string;
    count: number;
  }