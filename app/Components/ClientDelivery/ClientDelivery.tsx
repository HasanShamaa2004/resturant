"use client";
import Form, { FormErrors, FormGroup } from "@/app/src/components/Form";
import ArrowBack from "../ArrowBack/ArrowBack";
import Label from "@/app/src/components/Label";
import Input from "@/app/src/components/Input";
import MapPicker from "react-google-map-picker";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/app/src/components/Button/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { DeliveryFormData } from "@/app/src/types/Pages/ClientDelivery";
import i18n from "@/app/i18n/i18n";
// type DeliveryFormProps = ComponentPropsWithRef<"form"> & {
//   onSubmit?: (data: DeliveryFormData) => void;
// };
const deliverySchema = Yup.object().shape({
  name: Yup.string()
    .required(i18n.t("deliveryClient.nameRequired"))
    .min(3, i18n.t("deliveryClient.nameTooShort")),
  phone: Yup.string()
    .required(i18n.t("delivery.phoneRequired"))
    .matches(/^\+?[0-9]{10,15}$/, i18n.t("deliveryClient.phoneInvalidFormat")),
  street: Yup.string().required(i18n.t("deliveryClient.streetRequired")),
  building: Yup.string().required(i18n.t("deliveryClient.buildingRequired")),
  apartment: Yup.string().required(i18n.t("deliveryClient.apartmentRequired")),
  location: Yup.object()
    .shape({
      lat: Yup.number().required(i18n.t("deliveryClient.latitudeRequired")),
      lng: Yup.number().required(i18n.t("deliveryClient.longitudeRequired")),
    })
    .required(i18n.t("deliveryClient.locationRequired")),
});

const DefaultLocation = { lat: 25.2532, lng: 55.3657 };
const DefaultZoom = 10;
const GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY";
const ClientDelivery = () => {
  const logo = "/assets/img/big.webp";
  const [zoom, setZoom] = useState(DefaultZoom);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    street: "",
    building: "",
    apartment: "",
    location: DefaultLocation,
  });
  const [formError, setFormError] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  console.log(
    "🚀 ~ file: ClientDelivery.tsx:46 ~ ClientDelivery ~ errors:",
    formError
  );
  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          location: { lat: latitude, lng: longitude },
        }));
      },
      (err) => {
        console.log("Error getting location", err);
      }
    );
  };
  useEffect(() => {
    getLocation();
  }, []);
  const handleChange =
    (field: keyof DeliveryFormData) =>
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
      if (field !== "location") {
        try {
          const fieldSchema = Yup.reach(deliverySchema, field);
          if (
            fieldSchema instanceof Yup.StringSchema ||
            fieldSchema instanceof Yup.NumberSchema
          ) {
            await fieldSchema.validate(value);
            setErrors((prevErrors) => {
              const newErrors = { ...prevErrors };
              delete newErrors[field];
              return newErrors;
            });
          }
        } catch (validationError: any) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: validationError.message,
          }));
        }
      }
    };

  const handleChangeLocation = (lat: number, lng: number) => {
    setFormData((prev) => ({
      ...prev,
      location: { lat, lng },
    }));
  };
  const handleChangeZoom = (newZoom: number) => {
    setZoom(newZoom);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await deliverySchema.validate(formData, { abortEarly: false });
      setFormError(""); // Clear form error
      console.log("Form data:", formData);
      // router.push("/review");
    } catch (validationError: any) {
      console.log(
        "🚀 ~ file: ClientDelivery.tsx:78 ~ handleSubmit ~ validationError:",
        validationError
      );
      const errorMessages: Record<string, string> = {};
      validationError.inner.forEach((err: any) => {
        if (err.path.startsWith("location.")) {
          errorMessages.location = "Please select a location on the map";
        } else {
          errorMessages[err.path] = err.message;
        }
      });
      setErrors(errorMessages);
      const firstError = validationError.inner[0]?.message;
      setFormError(firstError || "Please fill in all required fields");
    }
  };
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <main className="container mx-auto mt-10 mb-[170px] md:px-0 px-4">
      <div className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-2xl text-white font-bold">{t("delivery")}</h2>
      </div>
      <section className="md:flex-between md:!items-start items-center flex-center !gap-12 w-full">
        <Form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:items-start md:justify-start justify-center w-full"
        >
          <h4 className="text-lg text-white font-bold mt-10">
            {t("deliveryContactAddress")}
          </h4>
          <FormGroup>
            <div className="flex flex-col w-full">
              <Label className="text-white text-xs my-2" htmlFor="name">
                {t("yourName")}
              </Label>
              <Input
                error={errors?.name}
                containerProps={{ className: "!min-w-[100px]" }}
                id="name"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Type Your name"
                className="bg-secondary !border-white focus:!border-white text-white max-w-[400px] w-full"
              />
              {errors?.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <Label className="text-white text-xs my-2" htmlFor="phone">
                {t("phoneNumber")}
              </Label>
              <Input
                error={errors?.phone}
                containerProps={{ className: "!min-w-[100px]" }}
                id="phone"
                value={formData.phone}
                onChange={handleChange("phone")}
                placeholder="e.g., +1 234 567 8901"
                className="bg-secondary !border-white focus:!border-white  text-white max-w-[400px] w-full "
              />
            </div>
          </FormGroup>
          <div className="xl:w-[82%] w-full">
            <Label className="text-white text-xs my-2" htmlFor="name">
              {t("streetAddress")}
            </Label>
            <Input
              error={errors?.street}
              containerProps={{ className: "!min-w-[100px]" }}
              value={formData.street}
              onChange={handleChange("street")}
              placeholder="e.g., 123 Main Street"
              className="bg-secondary !border-white focus:!border-white  text-white max-w-[830px] w-full"
            />
          </div>

          <FormGroup>
            <div className="flex flex-col w-full">
              <Label className="text-white text-xs my-2" htmlFor="building">
                {t("buildingName")}
              </Label>
              <Input
                error={errors?.building}
                containerProps={{ className: "!min-w-[100px]" }}
                id="building"
                value={formData.building}
                onChange={handleChange("building")}
                placeholder={t("typeYourName")}
                className="bg-secondary !border-white focus:!border-white text-white max-w-[400px] w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <Label className="text-white text-xs my-2" htmlFor="apartment">
                {t("apartmentNumber")}
              </Label>
              <Input
                error={errors?.apartment}
                containerProps={{ className: "!min-w-[100px]" }}
                id="apartment"
                value={formData.apartment}
                onChange={handleChange("apartment")}
                placeholder="e.g., Skyline Towers"
                className="bg-secondary !border-white focus:!border-white text-white max-w-[400px] w-full"
              />
            </div>
          </FormGroup>
          <div className="w-full">
            <Label className="text-white text-xs my-2" htmlFor="map">
              {t("map")}
            </Label>
            <MapPicker
              style={{ height: "300px" }}
              className="!max-w-[820px] w-full rounded-xl"
              defaultLocation={formData.location}
              zoom={zoom}
              mapTypeId={"roadmap" as any}
              onChangeLocation={handleChangeLocation}
              onChangeZoom={handleChangeZoom}
              apiKey={GOOGLE_MAPS_API_KEY}
            />
            {errors?.location && (
              <Input error={errors.location} className="hidden" />
            )}
          </div>
          <div className="flex w-full">
            <Button
              className="border border-gray-300 cursor-pointer max-w-[100px] w-full mr-3 bg-secondary flex items-center uppercase justify-center"
              onClick={() => router.back()}
            >
              {t("back")}
            </Button>
            <Button
              className="border border-gray-300 cursor-pointer max-w-[300px] w-full mr-3 bg-primary flex items-center uppercase justify-center"
              type="submit"
            >
              {t("continue")}
            </Button>
          </div>
        </Form>
        <div className="md:flex hidden mt-10">
          <Image alt="logo" height={300} width={300} src={logo} />
        </div>
      </section>
    </main>
  );
};

export default ClientDelivery;
