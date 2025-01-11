import { Card, CardBody } from "@/app/src/components/Card/Card";
import Image from "next/image";

const CardReview = () => {
  const photo = "/assets/img/dishes/dishes4.webp";
  return (
    <Card className="flex items-center justify-between !p-0 w-full bg-secondary">
      <CardBody className="flex items-center !p-2 w-full justify-between">
        <div className="flex items-center justify-start gap-4">
          <div>
            <Image
              height={60}
              width={60}
              alt="product"
              src={photo}
              className="rounded h-full w-full"
            />
          </div>
          <h4 className="md:text-xl text-base text-white font-semibold">
            Margherita Pizza
          </h4>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="flex items-center justify-center gap-3">
            <div className="text-white text-xl font-semibold">1</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardReview;
