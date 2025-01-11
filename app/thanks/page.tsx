import { Metadata } from "next";
import ClientThanks from "../Components/ClientThanks/ClientThanks";

export const metadata: Metadata = {
  title: "Thank You for Your Order | Best Grilled Food Restaurant",
  description:
    "Thank you for your order! We’re excited to serve you the best grilled dishes along with a variety of food and beverages. See you soon!",
  openGraph: {
    title: "Thank You for Your Order | Best Grilled Food Restaurant",
    description:
      "We appreciate your order! Enjoy our signature grilled dishes and other tasty options.",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary",
    title: "Thank You for Your Order | Best Grilled Food Restaurant",
    description:
      "Thanks for your order! Enjoy our famous grilled dishes and excellent service.",
  },
  keywords: [
    "thank you for your order",
    "grilled food restaurant",
    "best grilled dishes",
    "order confirmation",
    "top restaurant",
    "delicious food",
    "thank you message",
    "restaurant orders",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/order/thank-you",
  // },
};
const Page = () => {
  return <ClientThanks />;
};

export default Page;
