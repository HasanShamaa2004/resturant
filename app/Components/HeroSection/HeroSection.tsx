"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  const hero = "/assets/img/hero.webp";
  const burger = "/assets/img/burger.svg";
  const burger2 = "/assets/img/burger.webp";
  const { t } = useTranslation();
  return (
    <section
      className="container mx-auto rounded-xl py-4 mt-12"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-between md:py-3">
        <div className="flex md:w-[40%] gap-3 items-start flex-col">
          <div className="md:mr-0 mr-28">
            <Image alt="Burger" src={burger} width={200} height={200} />
          </div>

          <h2 className="md:text-3xl text-xl text-white font-semibold md:ml-12 ml-2">
            {t("flashOffer")}
          </h2>
          <h3 className="text-white md:text-2xl text-sm font-semibold md:ml-12 ml-2">
            {t("bestDeserts")}
            <br />
            {t("Deserts")}
          </h3>
          <Link
            href="/cart"
            className="md:ml-12 ml-2 flex gap-2 text-white font-semibold md:text-xl text-sm"
          >
            {t("order")}
            <SlArrowRight width={10} height={10} className="mt-1" />
          </Link>
        </div>
        <div className="md:w-[60%] w-[90%]">
          <Image
            alt="Burger"
            src={burger2}
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
