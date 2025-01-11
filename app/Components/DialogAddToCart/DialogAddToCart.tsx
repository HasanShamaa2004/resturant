import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/app/src/components/Dialog/Dialog";
import Image from "next/image";
import Button from "@/app/src/components/Button/Button";
import { useRouter } from "next/navigation";
import { DialogAddToCartProps } from "@/app/src/types/Components/DialogAddToCart";
import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import { addProduct } from "../Redux/Slices/productSlice";
// import { addProductToOrder } from "../Redux/Slices/orderSlice";

const DialogAddToCart = ({
  // id,
  open,
  setOpen,
  photo,
  price,
  title,
  size,
  count,
}: DialogAddToCartProps) => {
  const router = useRouter();
  // const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Dialog
      open={open}
      handler={() => setOpen(false)}
      className="w-full mix-w-[80px] bg-secondary flex flex-col md:p-8 p-4"
    >
      <DialogBody>
        <DialogTitle className="text-center tracking-wider w-full text-white font-semibold capitalize text-2xl ">
          {t("itemAdded")}
        </DialogTitle>
        <div className="mt-4 flex-between border md:h-[140px] w-full border-gray-800 rounded-xl ">
          <div className="flex justify-start gap-2 p-2">
            <div>
              <Image
                height={100}
                width={100}
                alt="product"
                src={photo}
                className="rounded h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="md:text-xl text-base text-white font-semibold">
                {title}
              </h4>
              <p className="md:text-base text-sm text-[#A5A7B1]">{size}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-white md:text-xl text-base">
              {count}
            </h4>
            <p className="font-semibold text-primary mr-2 whitespace-nowrap md:text-xl text-sm">
              {price}
            </p>
          </div>
        </div>
        <DialogDescription className="text-white font-semibold text-center md:text-2xl text-lg mt-3">
          {t("continueOrViewCart")}
        </DialogDescription>
        <div className="flex items-center justify-center gap-3 mt-4">
          <Button
            className="border border-gray-300 md:max-w-[220px] max-w-[170px] font-normal md:text-lg text-sm whitespace-nowrap cursor-pointer rounded-xl w-full bg-primary flex items-center uppercase justify-center"
            onClick={() => {
              router.push("/dishes");
            }}
          >
            {t("continueShopping")}
          </Button>
          <Button
            className="border border-gray-300 md:max-w-[220px] font-normal max-w-[170px] md:text-lg text-sm whitespace-nowrap cursor-pointer rounded-xl w-full bg-[#191A1F] flex items-center uppercase justify-center"
            onClick={() => {
              // dispatch(
              //   addProduct({ count: 1, id: id, price: price, title: title })
              // );
              // dispatch(
              //   addProductToOrder({
              //     product_count: 1,
              //     product_id: id,
              //     varation_id: 1,
              //   })
              // );
              router.push("/cart");
            }}
          >
            {t("viewCart")}
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default DialogAddToCart;
