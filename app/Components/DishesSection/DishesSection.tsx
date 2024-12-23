"use client";

import DishesCard from "../DishesCard/DishesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DishesSectionProps } from "@/app/src/types/Components/DishesSection";
import Link from "next/link";

const DishesSection = ({ DishesData }: DishesSectionProps) => {
  return (
    <section className="mb-44 container mx-auto">
      <div className="flex-between">
        <h5 className="text-lg text-white font-semibold mt-6 mb-6 md:px-4 px-6 text-start">
          Recommended Dishes
        </h5>
        <Link href="/dishes" className="text-primary text-lg mr-4">
          View all
        </Link>
      </div>

      <div className="md:grid md:grid-cols-3 hidden md:gap-4  place-content-center">
        {DishesData?.slice(0, 3).map((item) => (
          <DishesCard
            id={item.id}
            key={item.id}
            alt={item.alt}
            img={item.src}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
      <div className="block md:hidden px-6">
        <Swiper
          spaceBetween={10}
          slidesPerView={2.2}
          pagination={{ clickable: true }}
        >
          {DishesData?.slice(0, 3).map((item) => (
            <SwiperSlide key={item.id}>
              <DishesCard
                id={item.id}
                key={item.id}
                alt={item.alt}
                img={item.src}
                price={item.price}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DishesSection;
