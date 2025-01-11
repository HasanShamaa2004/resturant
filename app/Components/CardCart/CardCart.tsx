import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import Image from "next/image";
import { Card, CardBody } from "@/app/src/components/Card/Card";

const CardCart = () => {
  const photo = "/assets/img/dishes/dishes4.webp";
  return (
    <Card className="flex items-center justify-between p-1 w-full bg-secondary">
      <CardBody className="flex items-center w-full justify-between">
        <div className="flex items-center justify-start gap-4">
          <div>
            <Image
              height={100}
              width={100}
              alt="product"
              src={photo}
              className="rounded h-full w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="md:text-xl text-base text-white font-semibold">
              Margherita Pizza
            </h4>
            <p className="md:text-base text-sm text-primary font-semibold">
              15 AED
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-5">
          <button className="flex  w-5 justify-center rounded p-0.5 cursor-pointer bg-red gap-0 ">
            <IoClose className="text-white" size={15} />
          </button>
          <div className="flex items-center justify-center gap-3">
            <button className="flex-center gap-0 p-0.5 border-2 border-white cursor-pointer rounded">
              <FaPlus className="text-white font-semibold" size={15} />
            </button>
            <div className="text-white font-semibold">1</div>
            <button className="flex-center gap-0 p-0.5 border-2 border-white cursor-pointer rounded">
              <TiMinus className="text-white font-semibold" size={15} />
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardCart;
