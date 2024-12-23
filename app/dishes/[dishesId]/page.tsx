"use client";

import Button from "@/app/src/components/Button/Button";
import Input from "@/app/src/components/Input";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import ArrowBack from "@/app/Components/ArrowBack/ArrowBack";
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/app/src/components/Dialog/Dialog";
const page = () => {
  const sizes = ["Small", "Medium", "Large"];
  const [active, setActive] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const photo = "/assets/img/dishes/dishes1.webp";
  const photo1 = "/assets/img/dishes/dishes4.webp";
  const photo2 = "/assets/img/dishes/dishes3.webp";
  const photos = [photo, photo1, photo2];
  return (
    <main className="container md:px-0 px-4 mx-auto mt-10 mb-10">
      <section className="flex md:flex-row flex-col-reverse md:justify-between justify-center mb-10">
        <div className="flex flex-col gap-5 w-3/4">
          <div className="flex items-center justify-start md:mt-0 mt-4 gap-2">
            <ArrowBack />
            <h2 className="text-xl text-white font-bold">Chicken Fajita</h2>
          </div>
          <h4 className="font-bold text-primary text-lg px-4">
            <span className="leading-4 text-2xl">20</span> AED
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
                <div
                  className="bg-transparent cursor-pointer"
                  onClick={() => setValue((cur) => cur + 1)}
                >
                  <MdKeyboardArrowUp size={14} className="text-white" />
                </div>
                <div
                  className="bg-transparent cursor-pointer"
                  onClick={() => setValue((cur) => (cur === 0 ? 0 : cur - 1))}
                >
                  <MdKeyboardArrowDown size={14} className="text-white" />
                </div>
              </div>
            </div>
            <Button
              className="border border-gray-300 cursor-pointer max-w-[300px] w-full mr-3 bg-primary flex items-center uppercase justify-center"
              onClick={() => setOpen(true)}
            >
              place order
            </Button>
          </div>
        </div>
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay
          className="max-w-[400px] w-full h-[200px] rounded-xl"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <Image
                src={photo}
                alt={`image ${index}`}
                width={400}
                height={200}
                className="!object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="flex items-start flex-col">
        <h3 className="text-3xl text-white mb-4">Description</h3>
        <hr className="border-[#363A42] w-full mb-3" />
        <ul className="text-white list-disc ml-4 mb-4">
          <li className="text-lg">3 Tbsp. extra-virgin olive oil, divided</li>
          <li className="text-lg">Juice of 1 lime</li>
          <li className="text-lg">2 tsp. ground cumin</li>
          <li className="text-lg">2 tsp. chili powder</li>
          <li className="text-lg">Pinch of cayenne</li>
          <li className="text-lg">
            1 lb. boneless skinless chicken breasts, thinly sliced
          </li>
          <li className="text-lg">kosher salt</li>
          <li className="text-lg">Freshly ground black pepper</li>
          <li className="text-lg">1 large onion, thinly sliced</li>
          <li className="text-lg">4 bell peppers, seeded and sliced</li>
          <li className="text-lg">4 slices Monterey jack</li>
          <li className="text-lg">Toasted baguettes, for serving</li>
        </ul>
      </section>
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        className="w-full mix-w-[80px] bg-secondary flex flex-col md:p-8 p-4"
      >
        <DialogBody>
          <DialogTitle className="text-center tracking-wider w-full text-white font-semibold capitalize text-2xl ">
            Item Added to Your Cart!
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
                  Margherita Pizza
                </h4>
                <p className="md:text-base text-sm text-[#A5A7B1]">Medium</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white md:text-xl text-base">
                1
              </h4>
              <p className="font-semibold text-primary mr-2 whitespace-nowrap md:text-xl text-sm">
                15 AED
              </p>
            </div>
          </div>
          <DialogDescription className="text-white font-semibold text-center md:text-2xl text-lg mt-3">
            Would you like to continue shopping or view your cart?
          </DialogDescription>
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              className="border border-gray-300 md:max-w-[220px] max-w-[170px] font-normal md:text-lg text-sm whitespace-nowrap cursor-pointer rounded-xl w-full bg-primary flex items-center uppercase justify-center"
              onClick={() => {}}
            >
              Continue Shopping
            </Button>
            <Button
              className="border border-gray-300 md:max-w-[220px] font-normal max-w-[170px] md:text-lg text-sm whitespace-nowrap cursor-pointer rounded-xl w-full bg-[#191A1F] flex items-center uppercase justify-center"
              onClick={() => {}}
            >
              View Cart
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </main>
  );
};

export default page;
