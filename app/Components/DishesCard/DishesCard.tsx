import { CardDescription } from "@/app/src/components/Card/Card";
import { CardTitle } from "@/app/src/components/Card/Card";
import { Card } from "@/app/src/components/Card/Card";
import { DishesCardProps } from "@/app/src/types/Components/DishesCard";
import Image from "next/image";
import Link from "next/link";

const DishesCard = ({ price, title, img, alt, id }: DishesCardProps) => {
  return (
    <Link href={`/dishes/${id}`}>
      <Card className="max-w-[450px] md:max-h-[450px] md:h-full h-[230px] container mx-auto bg-secondary p-3 flex flex-col">
        <div className="mb-3">
          <Image
            src={img}
            alt={alt}
            height={340}
            width={340}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <CardTitle className="text-white md:text-xl text-base font-semibold line-clamp-2">
            {title}
          </CardTitle>
          <CardDescription className="font-bold text-primary uppercase">
            {price}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
};

export default DishesCard;
