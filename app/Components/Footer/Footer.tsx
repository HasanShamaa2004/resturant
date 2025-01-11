import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n/i18n";

const Footer = () => {
  const socialLinks = [
    {
      icon: AiOutlineInstagram,
      href: "#",
      label: i18n.t("social.instagram"),
    },
    {
      icon: FaFacebookF,
      href: "#",
      label: i18n.t("social.facebook"),
    },
    {
      icon: FaTwitter,
      href: "#",
      label: i18n.t("social.twitter"),
    },
    {
      icon: FaSnapchatGhost,
      href: "#",
      label: i18n.t("social.snapchat"),
    },
  ];
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-secondary px-4 py-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
          <div className="flex-shrink-0">
            <Image
              width={100}
              height={100}
              src="/assets/img/footer.webp"
              alt="Restaurant Logo"
              className="w-auto h-auto"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h2 className="text-white text-center font-semibold text-xl">
              {t("stayUpdated")}
            </h2>
            <div className="text-center text-[#92989F] text-sm">
              <p>{t("developedBy")}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-xl text-center">
              {t("followUsOn")}
            </h2>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  title={label}
                  className="group relative"
                  aria-label={label}
                >
                  <div className="bg-white p-2 rounded-full hover:bg-primary transition-colors group-hover:scale-110 duration-200">
                    <Icon
                      size={24}
                      className="text-secondary group-hover:text-white transition-colors"
                    />
                  </div>
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
