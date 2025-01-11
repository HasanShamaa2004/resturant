import { Metadata } from "next";
import ClientDishes from "../Components/ClientDishes/ClientDishes";
export const metadata: Metadata = {
  title: "Our Dishes Menu | Premium Restaurant Dishes",
  description:
    "Explore our diverse menu featuring premium grilled specialties, cold dishes, and refreshing beverages. Experience exceptional cuisine crafted with the finest ingredients.",
  openGraph: {
    title: "Our Dishes Menu | Premium Restaurant Dishes",
    description:
      "Discover our exceptional menu featuring premium dishes and beverages",
    type: "website",
  },
  keywords: [
    "restaurant dishes",
    "menu",
    "grilled food",
    "cold dishes",
    "beverages",
  ],
  robots: {
    index: true,
    follow: true,
  },
};
const Page = () => {
  return <ClientDishes />;
};

export default Page;
