"use client";
import Label from "@/app/src/components/Label";
import ArrowBack from "../ArrowBack/ArrowBack";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "@/app/src/components/Input";
import Button from "@/app/src/components/Button/Button";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import i18n from "@/app/i18n/i18n";

// تعريف مخطط التحقق
const schema = yup.object().shape({
  tableNumber: yup
    .string()
    .required(i18n.t("tableNumberRequired"))
    .matches(/^\d+$/, i18n.t("tableNumberNumeric"))
    .min(1, i18n.t("tableNumberTooShort"))
    .max(10, i18n.t("tableNumberTooLong")),
});
const ClientInPerson = () => {
  const { t } = useTranslation();
  const [tableNumber, setTableNumber] = useState<string>("");
  const [error, setError] = useState<Record<string, string>>({});
  const logo = "/assets/img/big.webp";
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await schema.validate({ tableNumber }, { abortEarly: false });

      // إذا نجح التحقق، انتقل إلى الصفحة التالية
      router.push("/review");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessages: Record<string, string> = {};
        error.inner.forEach((err: any) => {
          errorMessages[err.path] = err.message;
        });
        setError(errorMessages);
      }
    }
  };

  return (
    <main className="container mx-auto mt-10 mb-[170px] md:px-0 px-4">
      <div className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-2xl text-white font-bold">{t("inPerson")}</h2>
      </div>
      <section className="md:flex-between flex-center !gap-0 w-full">
        <div className="flex flex-col gap-4 md:items-start md:justify-start justify-center w-full">
          <h4 className="text-lg text-white font-bold mt-10">
            {t("dineInTableNumber")}
          </h4>
          <div className="w-full flex flex-col justify-center items-start">
            <Label className="text-white text-xs my-2" htmlFor="table">
              {t("tableNumber")}
            </Label>
            <Input
              value={tableNumber}
              onChange={(e) => {
                setTableNumber(e.target.value);
                setError({}); // مسح الخطأ عند الكتابة
              }}
              error={error?.tableNumber}
              placeholder={t("enterTableNumber")}
              className="bg-secondary !border-white focus:!border-white max-w-[400px] text-white w-full"
            />
          </div>
          <p className="text-sm text-[#A5A7B1]">{t("staffWillBringOrder")}</p>
          <div className="flex w-full">
            <Button
              className="border border-gray-300 cursor-pointer max-w-[100px] w-full mr-3 bg-secondary flex items-center uppercase justify-center"
              onClick={() => router.back()}
            >
              {t("back")}
            </Button>
            <Button
              className="border border-gray-300 cursor-pointer max-w-[300px] w-full mr-3 bg-primary flex items-center uppercase justify-center"
              onClick={handleSubmit}
            >
              {t("continue")}
            </Button>
          </div>
        </div>
        <div className="md:flex hidden">
          <Image alt="logo" height={300} width={300} src={logo} />
        </div>
      </section>
    </main>
  );
};

export default ClientInPerson;
