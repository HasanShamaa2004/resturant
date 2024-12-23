import Link from "next/link";
import Image from "next/image";
import { MenuCardProps } from "@/app/src/types/Components/MenuCard";

const MenuCard = ({ src, alt, text }: MenuCardProps) => {
  return (
    <Link
      href="/dishes"
      className="group flex w-full h-full
      items-start justify-start flex-col gap-2
      hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full aspect-square flex-shrink-0">
        <Image
          alt={alt}
          src={src}
          width={240}
          height={240}
          className="object-contain w-full h-full"
          priority={false}
        />
      </div>
      <div className="w-full">
        <h5
          className="text-center text-white 
        text-sm md:text-base lg:text-lg
        font-semibold break-words line-clamp-2"
        >
          {text}
        </h5>
      </div>
    </Link>
  );
};

export default MenuCard;
