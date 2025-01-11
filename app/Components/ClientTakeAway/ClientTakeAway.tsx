"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import * as yup from "yup";
import ArrowBack from "../ArrowBack/ArrowBack";
import Label from "@/app/src/components/Label";
import Input from "@/app/src/components/Input";
import Button from "@/app/src/components/Button/Button";
import { useRouter } from "next/navigation";
import i18n from "@/app/i18n/i18n";

// تعريف نوع البيانات للوقت
interface TimeState {
  hours: number | null;
  minutes: number | null;
  period: "AM" | "PM";
}

// تعريف مخطط التحقق
const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required(i18n.t("phoneNumberRequired"))
    .matches(/^\+?[0-9]{10,15}$/, i18n.t("phoneNumberInvalidFormat")),
  time: yup.object().shape({
    hours: yup
      .number()
      .required(i18n.t("time.hoursRequired"))
      .min(1, i18n.t("time.hoursMin"))
      .max(12, i18n.t("time.hoursMax")),
    minutes: yup
      .number()
      .required(i18n.t("time.minutesRequired"))
      .min(0, i18n.t("time.minutesMin"))
      .max(59, i18n.t("time.minutesMax")),
    period: yup
      .string()
      .oneOf(["AM", "PM"], i18n.t("time.periodInvalid"))
      .required(i18n.t("time.periodRequired")),
  }),
});

const ClientTakeAway = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [time, setTime] = useState<TimeState>({
    hours: null,
    minutes: null,
    period: "AM",
  });

  const logo = "/assets/img/big.webp";
  const { t } = useTranslation();
  const router = useRouter();

  const handleTimeChange = (field: keyof TimeState, value: any) => {
    let newValue = value;

    if (field === "hours") {
      if (value === null || value === "") {
        newValue = null;
      } else {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          newValue = Math.min(Math.max(1, numValue), 12);
        } else {
          newValue = null;
        }
      }
    }

    if (field === "minutes") {
      if (value === null || value === "") {
        newValue = null;
      } else {
        const numValue = Number(value);
        if (!isNaN(numValue)) {
          newValue = Math.min(Math.max(0, numValue), 59);
        } else {
          newValue = null;
        }
      }
    }

    if (field === "period") {
      newValue = value === "AM" ? "PM" : "AM";
    }

    setTime((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  const handleSubmit = async () => {
    try {
      await schema.validate(
        {
          phoneNumber,
          time,
        },
        { abortEarly: false }
      );
      router.push("/review");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const errorMessages: Record<string, string> = {};
        error.inner.forEach((err: any) => {
          errorMessages[err.path] = err.message;
        });
        setErrors(errorMessages);
      }
    }
  };

  return (
    <main className="container mx-auto mt-10 mb-[170px] overflow-x-hidden md:px-0 px-4">
      <div className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-2xl text-white font-bold">{t("takeAway")}</h2>
      </div>
      <section className="md:flex-between flex-center !gap-0 w-full">
        <div className="flex flex-col gap-4 md:items-start md:justify-start justify-center w-full">
          <h4 className="text-lg text-white font-bold mt-10">
            {t("takeAwayContact")}
          </h4>
          <div className="w-full flex flex-col justify-center items-start">
            <Label className="text-white text-xs my-2" htmlFor="table">
              {t("phoneNumber")}
            </Label>
            <Input
              error={errors?.phoneNumber}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g., +1 234 567 8901"
              className="bg-secondary !border-white focus:!border-white max-w-[400px] text-white w-full"
            />
          </div>
          <p className="text-sm text-[#A5A7B1]">{t("pickupTime")}</p>

          <div className="flex items-center gap-2">
            {/* Hours Input */}
            <div className="relative w-[80px] text-white rounded bg-secondary">
              <Input
                type="text"
                value={time.hours === null ? "" : time.hours}
                placeholder="hh"
                onChange={(e) => handleTimeChange("hours", e.target.value)}
                className="!border-blue-gray-200 focus:!border-blue-gray-200 max-w-[80px] font-bold text-lg border placeholder:text-white text-white placeholder:opacity-100 bg-secondary appearance-none"
              />
              <div className="absolute right-1 top-1 flex flex-col">
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() =>
                    handleTimeChange(
                      "hours",
                      time.hours === null ? 1 : time.hours + 1
                    )
                  }
                >
                  <MdKeyboardArrowUp size={14} className="text-white" />
                </button>
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() =>
                    handleTimeChange(
                      "hours",
                      time.hours === null ? 12 : time.hours - 1
                    )
                  }
                >
                  <MdKeyboardArrowDown size={14} className="text-white" />
                </button>
              </div>
            </div>

            <span className="text-lg text-white font-bold">:</span>

            {/* Minutes Input */}
            <div className="relative w-[80px] text-white rounded bg-secondary">
              <Input
                type="text"
                value={time.minutes === null ? "" : time.minutes}
                placeholder="mm"
                onChange={(e) => handleTimeChange("minutes", e.target.value)}
                className="!border-blue-gray-200 focus:!border-blue-gray-200 max-w-[80px] font-bold text-lg border placeholder:text-white text-white placeholder:opacity-100 bg-secondary appearance-none"
              />
              <div className="absolute right-1 top-1 flex flex-col">
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() =>
                    handleTimeChange(
                      "minutes",
                      time.minutes === null ? 0 : (time.minutes + 1) % 60
                    )
                  }
                >
                  <MdKeyboardArrowUp size={14} className="text-white" />
                </button>
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() =>
                    handleTimeChange(
                      "minutes",
                      time.minutes === null ? 59 : (time.minutes - 1 + 60) % 60
                    )
                  }
                >
                  <MdKeyboardArrowDown size={14} className="text-white" />
                </button>
              </div>
            </div>

            {/* AM/PM Input */}
            <div className="relative w-[80px] text-white rounded bg-secondary">
              <Input
                type="text"
                value={time.period}
                readOnly
                className="!border-blue-gray-200 focus:!border-blue-gray-200 max-w-[80px] font-bold text-lg border placeholder:text-white text-white placeholder:opacity-100 bg-secondary cursor-default"
              />
              <div className="absolute right-1 top-1 flex flex-col">
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() => handleTimeChange("period", time.period)}
                >
                  <MdKeyboardArrowUp size={14} className="text-white" />
                </button>
                <button
                  className="bg-transparent cursor-pointer"
                  onClick={() => handleTimeChange("period", time.period)}
                >
                  <MdKeyboardArrowDown size={14} className="text-white" />
                </button>
              </div>
            </div>
          </div>
          {(errors["time.hours"] ||
            errors["time.minutes"] ||
            errors["time.period"]) && (
            <p className="text-red text-lg ">
              {errors["time.hours"] ||
                errors["time.minutes"] ||
                errors["time.period"]}
            </p>
          )}

          <p className="text-sm text-[#A5A7B1]">{t("contactIfQuestions")}</p>
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

export default ClientTakeAway;
