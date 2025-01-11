"use client";

import MenuCard from "../MenuCard/MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MenuSectionProps } from "@/app/src/types/Components/MenuSection";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MenuSection = ({ data }: MenuSectionProps) => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <div className="flex-between">
        <h5 className="text-lg text-white font-semibold mt-6 mb-6 md:px-4 px-6 text-start">
          {t("chooseFromMenu")}
        </h5>
        <Link href="/menu" className="text-primary text-lg mr-4">
          {t("viewAll")}
        </Link>
      </div>
      <div className="md:grid lg:grid-cols-5 md:grid-cols-4 hidden md:gap-4 gap-2 place-content-center">
        {data?.slice(0, 10).map((item) => (
          <MenuCard
            alt={item.alt}
            key={item.id}
            text={item.text}
            src={item.src}
          />
        ))}
      </div>
      <div className="block md:hidden px-6">
        <Swiper
          spaceBetween={10}
          slidesPerView={3.4}
          pagination={{ clickable: true }}
        >
          {data?.slice(0, 10).map((item) => (
            <SwiperSlide key={item.id}>
              <MenuCard alt={item.alt} text={item.text} src={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MenuSection;
