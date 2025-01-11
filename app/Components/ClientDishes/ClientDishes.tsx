"use client";
import ArrowBack from "../ArrowBack/ArrowBack";
import DishesCard from "../DishesCard/DishesCard";
import { DishesData } from "../DishesCard/DishesData";
import { useTranslation } from "react-i18next";

const ClientDishes = () => {
  const { t } = useTranslation();
  return (
    <main className="container mx-auto mt-10 mb-44 md:px-0 px-4">
      <section className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-xl text-white font-bold">Sandwiches</h2>
      </section>
      <section className="mt-10">
        <div className="flex-between md:flex hidden">
          <h4 className="text-white font-semibold md:block hidden text-lg mb-4">
            {t("ourDishes")}
          </h4>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
          {DishesData.map((item) => (
            <DishesCard
              id={item.id}
              alt={item.alt}
              img={item.src}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ClientDishes;
