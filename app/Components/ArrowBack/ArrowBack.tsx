"use client";
import { FaArrowLeft } from "react-icons/fa6";

import { useRouter } from "next/navigation";
const ArrowBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <FaArrowLeft
      size={28}
      className="text-white cursor-pointer"
      onClick={handleGoBack}
    />
  );
};

export default ArrowBack;
