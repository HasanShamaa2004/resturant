"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const not = "/assets/img/404.webp";
  const { t } = useTranslation();
  return (
    <main className="container mx-auto my-[95px]">
      <section className="flex flex-col gap-4 items-center justify-center">
        <div>
          <Image alt="Not Found" src={not} height={300} width={300} />
        </div>
        <h1 className="text-2xl text-white text-center font-semibold capitalize">
          {t("oopsPageNotFound")}
        </h1>
      </section>
    </main>
  );
};

export default NotFound;
