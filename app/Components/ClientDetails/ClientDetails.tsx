"use client";

import Button from "@/app/src/components/Button/Button";
import Input from "@/app/src/components/Input";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ArrowBack from "@/app/Components/ArrowBack/ArrowBack";
import DialogAddToCart from "@/app/Components/DialogAddToCart/DialogAddToCart";
import Carousel from "@/app/Components/Carousel/Carousel";
import { ClientDetailsProps } from "@/app/src/types/Pages/ClientDetails";
import { useTranslation } from "react-i18next";

const ClientDetails = ({ data }: ClientDetailsProps) => {
  const sizes = ["Small", "Medium", "Large"];
  const [active, setActive] = useState<string>("");
  const [value, setValue] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const photo = data?.src;
  const photo1 = "/assets/img/dishes/dishes4.webp";
  const photo2 = "/assets/img/dishes/dishes3.webp";
  const { t } = useTranslation();
  const photos = [photo, photo1, photo2];
  const list = [
    "3 Tbsp. extra-virgin olive oil, divided",
    "Juice of 1 lime",
    "2 tsp. ground cumin",
    "2 tsp. chili powder",
    "Pinch of cayenne",
    "1 lb. boneless skinless chicken breasts, thinly sliced",
    "kosher salt",
    "Freshly ground black pepper",
    "1 large onion, thinly sliced",
    "4 bell peppers, seeded and sliced",
    "4 slices Monterey jack",
    "Toasted baguettes, for serving",
  ];
  return (
    <main className="container md:px-0 px-4 mx-auto mt-10 mb-10">
      <section className="flex md:flex-row flex-col-reverse md:justify-between justify-center mb-10">
        <div className="flex flex-col gap-5 w-3/4">
          <h4 className="font-bold text-primary text-lg px-4 md:pt-0 pt-4">
            <div className="hidden md:flex items-center justify-start gap-2">
              <ArrowBack />
              <h2 className="text-xl text-white font-bold">{data?.title}</h2>
            </div>
            <div className="mt-2">
              <span className="text-3xl uppercase">
                {data?.price.slice(0, 2)}
              </span>
              <span className="text-xl uppercase">
                {data?.price?.slice(2, 6)}
              </span>
            </div>
          </h4>
          <div className="flex gap-2">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`flex items-center w-fit justify-center p-3 border
               border-gray-500 text-white rounded-3xl
                hover:text-white hover:bg-primary ${
                  active === size ? "bg-primary" : " bg-secondary"
                } `}
                onClick={() => setActive(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="relative max-w-[80px] text-white rounded bg-secondary w-full">
              <Input
                type="number"
                value={value}
                min={1}
                onWheel={(e) => e.currentTarget.blur()}
                onChange={(e) => setValue(Number(e.target.value))}
                className="!border-blue-gray-200 focus:!border-blue-gray-200  max-w-[80px]  font-bold text-xlg border placeholder:text-blue-gray-300 text-white placeholder:opacity-100 bg-secondary  appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <div className="absolute right-1 top-1 flex flex-col">
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() => setValue((cur) => cur + 1)}
                >
                  <MdKeyboardArrowUp size={14} className="text-white" />
                </button>
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() => setValue((cur) => (cur === 1 ? 1 : cur - 1))}
                >
                  <MdKeyboardArrowDown size={14} className="text-white" />
                </button>
              </div>
            </div>
            <Button
              className="border border-gray-300 cursor-pointer max-w-[300px] w-full mr-3 bg-primary flex items-center uppercase justify-center"
              onClick={() => setOpen(true)}
            >
              {t("placeOrder")}
            </Button>
          </div>
        </div>
        <Carousel photos={photos} />
        <div className="flex md:hidden items-center justify-start md:mt-0 mb-4 gap-2">
          <ArrowBack />
          <h2 className="text-xl text-white font-bold">{data?.title}</h2>
        </div>
      </section>
      <section className="flex items-start flex-col">
        <h3 className="text-3xl text-white mb-4">{t("description")}</h3>
        <hr className="border-[#363A42] w-full mb-3" />
        <ul className="text-white list-disc ml-4 mb-4">
          {list.map((item, index) => (
            <li className="text-lg" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <DialogAddToCart
        id={data?.id}
        open={open}
        setOpen={setOpen}
        photo={photo}
        price={data?.price}
        title={data?.title}
        size="Medium"
        count={value}
      />
    </main>
  );
};

export default ClientDetails;
