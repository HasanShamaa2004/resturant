"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/app/src/components/Button/Button";
const ClientThanks = () => {
  const { t } = useTranslation();
  const not = "/assets/img/thanks.webp";
  const router = useRouter();
  return (
    <main className="container mx-auto my-[80px] md:px-0 px-4">
      <section className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-white font-semibold text-center text-3xl">
          {t("thankYouForOrder")}
        </h1>
        <div>
          <Image alt="Not Found" src={not} height={125} width={125} />
        </div>
        <p className="text-[#A5A7B1] text-center text-xl">{t("orderPlaced")}</p>
        <Button
          className="border border-gray-300 cursor-pointer max-w-[300px] w-full mr-3 bg-primary flex items-center uppercase justify-center"
          onClick={() => router.push("/")}
        >
          {t("returnToHome")}
        </Button>
      </section>
    </main>
  );
};

export default ClientThanks;
