import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const footer = "/assets/img/footer.webp";
  return (
    <footer className="flex-center md:flex-row flex-col !justify-around bg-secondary p-6 !gap-12">
      <Image width={100} height={100} alt="Logo" src={footer} />
      <div className="flex flex-col gap-4">
        <h3 className="text-white text-center font-semibold text-xl">
          Stay Updated with Our Menu!
        </h3>
        <h5 className="text-base text-[#92989F]">
          Developed By Hasan Shamaa Copyerite 2024
        </h5>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-xl text-center">
          Follow us on
        </h3>
        <div className="flex-center">
          <AiOutlineInstagram
            size={40}
            className="bg-white flex-center rounded-full text-secondary p-1"
          />
          <FaFacebookF
            size={40}
            className="bg-white flex-center rounded-full p-1 text-secondary"
          />
          <FaTwitter
            size={40}
            className="bg-white flex-center rounded-full p-1 text-secondary"
          />
          <FaSnapchatGhost
            size={40}
            className="bg-white flex-center rounded-full p-1 text-secondary"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
