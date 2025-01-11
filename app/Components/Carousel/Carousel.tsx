import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const Carousel = ({ photos }: { photos: string[] }) => {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      autoplay
      className="max-w-[400px] w-full h-[225px] rounded-xl"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`image ${index}`}
            width={425}
            height={200}
            className="!object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
