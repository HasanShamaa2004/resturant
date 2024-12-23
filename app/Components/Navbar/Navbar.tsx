"use client";

import Image from "next/image";
import Input from "@/app/src/components/Input";
import { CiSearch } from "react-icons/ci";
import { HiOutlineLanguage } from "react-icons/hi2";
import { useState } from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
} from "@/app/src/components/Dialog/Dialog";
import { Option, Select } from "@/app/src/components/Select";

const Navbar = () => {
  const store = "/assets/icons/store.svg";
  const logo = "/assets/img/logo.svg";
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState("select-language");
  return (
    <header className="bg-[#18181B] md:px-6 container mx-auto px-0 !max-w-full !w-full overflow-hidden">
      <nav className="flex-between md:p-6 p-3 w-full">
        <Image alt="logo" src={logo} width={60} height={60} />
        <h1 className="text-[#CDB76B] text-lg font-bold md:hidden block ml-2 uppercase">
          QASR AL MASHAWIAAT
        </h1>
        <Input
          containerProps={{
            className: "min-w-[300px] md:flex hidden focus:!outline-none",
          }}
          placeholder="what are you looking for?"
          icon={
            <CiSearch
              width={40}
              height={40}
              className="md:block hidden text-gray-500"
            />
          }
          className="md:flex border-none hidden md:w-[600px] placeholder:text-gray-500 !bg-secondary text-gray-500 focus:outline-none "
        />
        <div className="flex-center">
          <HiOutlineLanguage
            size={30}
            className="text-white cursor-pointer"
            onClick={() => setOpen(true)}
          />
          <Image
            alt="logo"
            src={store}
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </nav>
      <Dialog
        open={open}
        handler={() => setOpen(false)}
        className="bg-secondary p-4 flex flex-col justify-center gap-4 w-full"
      >
        <DialogHeader className="text-white font-semibold text-2xl tracking-wider text-center">
          Select Your Language
        </DialogHeader>
        <DialogBody>
          <Select
            variant="outlined"
            value={selected}
            onChange={(e) => setSelected(e as string)}
            className="text-white"
          >
            <Option value="select-language" disabled>
              Select Language
            </Option>
            <Option value="en">English</Option>
            <Option value="ar">Arabic</Option>
          </Select>
        </DialogBody>
      </Dialog>
    </header>
  );
};

export default Navbar;
