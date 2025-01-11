import { Metadata } from "next";
import ClientCart from "../Components/ClientCart/ClientCart";
export const metadata: Metadata = {
  title: "Your Cart | Best Grilled Food Restaurant",
  description:
    "Review your cart and finalize your order. Enjoy our signature grilled dishes, refreshing beverages, and more.",
  openGraph: {
    title: "Your Cart | Best Grilled Food Restaurant",
    description:
      "Take a look at your cart and get ready to enjoy our delicious grilled dishes and other tasty options.",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary",
    title: "Your Cart | Best Grilled Food Restaurant",
    description:
      "Review your order and prepare for an amazing dining experience with our famous grilled food.",
  },
  keywords: [
    "restaurant cart",
    "grilled food",
    "review your order",
    "restaurant order",
    "best grilled dishes",
    "food and beverages",
    "restaurant checkout",
    "top grilled food restaurant",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/cart",
  // },
};
const Page = () => {
  return <ClientCart />;
};

export default Page;
