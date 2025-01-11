"use client";

import { useTranslation } from "react-i18next";
import ArrowBack from "../ArrowBack/ArrowBack";
import MenuCard from "../MenuCard/MenuCard";
import { data } from "../MenuCard/data";

const ClientMenu = () => {
  const { t } = useTranslation();
  return (
    <main className="container mx-auto mt-10 mb-44 md:px-0 px-4">
      <section className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-xl text-white font-bold"> {t("chooseFromMenu")}</h2>
      </section>
      <section className="mt-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
          {data.map((item) => (
            <MenuCard
              alt={item.alt}
              src={item.src}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ClientMenu;
