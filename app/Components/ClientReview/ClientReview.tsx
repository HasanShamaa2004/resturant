"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Button from "@/app/src/components/Button/Button";
import ArrowBack from "../ArrowBack/ArrowBack";
import CardReview from "../CardReview/CardReview";
import PriceRow from "../PriceRow/PriceRow";
import DetailRow from "../DetailRow/DetailRow";

const ClientReview = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const dineInDetails = [
    { label: t("yourName"), value: "Jhon Doe" },
    { label: t("phoneNumber"), value: "+1 234 567 8901" },
    { label: t("tableNumber"), value: "Table 12" },
    { label: t("streetName"), value: "Baker Street" },
    { label: t("buildingName"), value: "Skyline Towers" },
    { label: t("apartmentNumber"), value: "12B" },
  ];

  const priceDetails = [
    { label: t("subtotal"), value: "51 AED" },
    { label: t("tax"), value: "8%" },
    { label: t("deliveryFee"), value: "8 AED" },
  ];

  const handleConfirmOrder = () => router.push("/thanks");

  return (
    <main className="container mx-auto mt-10 mb-44 md:px-0 px-4">
      <section className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-3xl text-white font-bold capitalize">
          {t("reviewYourOrder")}
        </h2>
      </section>

      <section className="flex lg:flex-row flex-col justify-between lg:items-start items-center mt-8 gap-8">
        <div className="flex items-start justify-center lg:w-3/4 w-full gap-4 flex-col">
          <h4 className="text-2xl font-semibold text-primary mt-4">
            {t("yourOrder")}
          </h4>
          <hr className="border-[#A5A7B1] w-full border mb-4" />
          {[...Array(3)].map((_, index) => (
            <CardReview key={index} />
          ))}

          <h4 className="text-2xl font-semibold text-primary mt-4">
            {t("dineInDetails")}
          </h4>
          <hr className="border-[#363A42] w-full border mb-4" />

          {dineInDetails.map(({ label, value }) => (
            <DetailRow key={label} label={label} value={value} />
          ))}
        </div>

        <div className="flex flex-col items-start lg:w-1/4 w-full gap-4 h-full bg-secondary rounded-xl p-4">
          <h4 className="text-2xl font-semibold text-primary mt-4">
            {t("priceSummary")}
          </h4>
          <hr className="border-[#A5A7B1] w-full border" />

          {priceDetails.map(({ label, value }) => (
            <PriceRow key={label} label={label} value={value} />
          ))}
          <PriceRow label={t("total")} value="52 AED" isTotal />

          <hr className="border-[#A5A7B1] w-full border mt-4" />
          <Button
            className="border border-gray-300 cursor-pointer w-full mr-3 mt-4 bg-primary flex items-center uppercase justify-center"
            onClick={handleConfirmOrder}
          >
            {t("confirmOrder")}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ClientReview;
