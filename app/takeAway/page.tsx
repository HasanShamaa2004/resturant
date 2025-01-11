import { Metadata } from "next";
import ClientTakeAway from "../Components/ClientTakeAway/ClientTakeAway";
export const metadata: Metadata = {
  title: "Online Order & Takeaway | Fast & Fresh Delivery",
  description:
    "Order your favorite Middle Eastern and Mediterranean dishes for takeaway. Enjoy fresh grilled specialties, authentic dishes, and beverages delivered to your doorstep.",
  openGraph: {
    title: "Online Order & Takeaway | Fast & Fresh Delivery",
    description:
      "Order your favorite dishes for takeaway with quick and reliable delivery service",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Takeaway Online",
    description: "Fresh food delivered to your door",
  },
  keywords: [
    "food delivery",
    "takeaway",
    "online order",
    "food ordering",
    "restaurant delivery",
    "Middle Eastern food delivery",
    "Mediterranean food delivery",
    "quick delivery",
    "fresh food delivery",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/takeaway",
  // },
};

const Page = () => {
  return <ClientTakeAway />;
};

export default Page;
