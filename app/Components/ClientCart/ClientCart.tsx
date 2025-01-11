"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Label from "@/app/src/components/Label";
import ArrowBack from "../ArrowBack/ArrowBack";
import CardCart from "../CardCart/CardCart";
import { Select, Option } from "@/app/src/components/Select";
import Button from "@/app/src/components/Button/Button";
import PriceRow from "../PriceRow/PriceRow";
import { OrderType } from "@/app/src/types/Pages/ClientCart";

const ClientCart = () => {
  const [selected, setSelected] = useState<OrderType>("select-type");
  const { t } = useTranslation();
  const router = useRouter();
  const inPerson = "/assets/icons/inPerson.svg";
  const takeAway = "/assets/icons/takeAway.svg";
  const delivery = "/assets/icons/delivery.svg";

  const selectMenuProps = {
    modifiers: [
      {
        name: "preventOverflow",
        options: { boundary: "viewport" },
      },
      {
        name: "offset",
        options: { offset: [0, 10] },
      },
    ],
    placement: "bottom",
    className: "bg-secondary",
  };

  return (
    <main className="container mx-auto mt-10 mb-44 md:px-0 px-4">
      <section className="flex items-center justify-start md:py-10 py-4 gap-2">
        <ArrowBack />
        <h2 className="text-4xl text-white font-bold">{t("myCart")}</h2>
      </section>

      <section className="flex lg:flex-row flex-col justify-between lg:items-start items-center gap-8">
        <div className="flex items-center justify-center lg:w-3/4 w-full gap-4 flex-col">
          {[...Array(3)].map((_, index) => (
            <CardCart key={index} />
          ))}
        </div>

        <div className="flex flex-col items-start lg:w-1/4 w-full gap-4 h-full bg-secondary rounded-xl p-4">
          <h4 className="text-2xl font-semibold text-primary mt-4">
            {t("priceSummary")}
          </h4>
          <hr className="border-[#A5A7B1] w-full border" />

          <PriceRow label={t("subtotal")} value="51 AED" />
          <PriceRow label={t("tax")} value="8%" />
          <PriceRow label={t("total")} value="52 AED" isTotal />

          <h4 className="text-2xl font-semibold text-primary mt-4">
            {t("orderType")}
          </h4>
          <hr className="border-[#A5A7B1] w-full border" />

          <Label className="text-white text-base" htmlFor="order">
            {t("chooseOrderType")}
          </Label>
          <Select
            id="order"
            variant="outlined"
            value={selected}
            onChange={(e) => setSelected(e as OrderType)}
            className="text-white flex bg-secondary !items-center w-full"
            menuProps={selectMenuProps}
            containerProps={{
              className: "!w-full !min-w-[100px]",
            }}
          >
            <Option
              value="select-type"
              disabled
              className="hover:!bg-none bg-!none !text-white"
            >
              {t("selectOrderType")}
            </Option>
            <Option
              value="inPerson"
              className="flex gap-2 items-center !justify-start"
            >
              <div className="flex gap-2 items-center !justify-start">
                <div>
                  <Image alt="inPerson" width={20} height={20} src={inPerson} />
                </div>
                <span>{t("inPerson")}</span>
              </div>
            </Option>
            <Option
              value="takeAway"
              className="flex gap-2 items-center !justify-start"
            >
              <div className="flex gap-2 items-center !justify-start">
                <div>
                  <Image alt="takeAway" width={20} height={20} src={takeAway} />
                </div>
                <span>{t("takeAway")}</span>
              </div>
            </Option>
            <Option
              value="delivery"
              className="flex gap-2 items-center !justify-start"
            >
              <div className="flex gap-2 items-center !justify-start">
                <div>
                  <Image alt="delivery" width={20} height={20} src={delivery} />
                </div>
                <span>{t("delivery")}</span>
              </div>
            </Option>
          </Select>

          <hr className="border-[#A5A7B1] w-full border mt-4" />
          <Button
            className="border border-gray-300 cursor-pointer w-full mr-3 mt-4 bg-primary flex items-center uppercase justify-center"
            onClick={() => router.push(selected)}
          >
            {t("proceedToCheckout")}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ClientCart;
