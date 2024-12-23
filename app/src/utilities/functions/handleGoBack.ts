"use client"

import { useRouter } from "next/navigation";

const router = useRouter();

export const handleGoBack = () => {
  router.back();
};