import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const HeroSection = () => {
  const hero = "/assets/img/hero.webp";
  const burger = "/assets/img/burger.svg";
  return (
    <section
      className="  container mx-auto rounded-xl py-4 mt-12"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-start justify-start md:px-6 py-3">
        <div className="flex md:w-[60%] gap-3 items-start justify-center flex-col">
          <Image alt="Burger" src={burger} width={200} height={200} />
          <h2 className="text-3xl text-white font-semibold ml-12">
            Flash Offer
          </h2>
          <h3 className="text-white text-2xl font-semibold ml-12">
            We are here with the best
            <br />
            deserts intown.
          </h3>
          <Link
            href="/"
            className="ml-12 flex gap-2 text-white font-semibold text-xl"
          >
            Order <SlArrowRight width={10} height={10} className="mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
