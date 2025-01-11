import { Metadata } from "next";
import ClientDelivery from "../Components/ClientDelivery/ClientDelivery";
export const metadata: Metadata = {
  title: "Delivery Payment | Best Grilled Food Restaurant",
  description:
    "Complete your delivery order with secure payment options. Enjoy our signature grilled dishes and a variety of tasty food and beverages delivered to your door.",
  openGraph: {
    title: "Delivery Payment | Best Grilled Food Restaurant",
    description:
      "Make your delivery payment quickly and securely. Enjoy our famous grilled dishes and more at the comfort of your home.",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary",
    title: "Delivery Payment | Best Grilled Food Restaurant",
    description:
      "Secure your delivery payment and get ready to enjoy our delicious grilled food at home.",
  },
  keywords: [
    "delivery payment",
    "restaurant delivery",
    "grilled food delivery",
    "secure payment",
    "online payment",
    "food delivery payment",
    "best grilled food",
    "restaurant payment options",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/payment/delivery",
  // },
};

const Page = () => {
  return <ClientDelivery />;
};

export default Page;
