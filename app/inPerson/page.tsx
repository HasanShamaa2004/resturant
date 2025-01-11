import { Metadata } from "next";
import ClientInPerson from "../Components/ClientInPerson/ClientInPerson";
export const metadata: Metadata = {
  title: "In-Person Payment | Secure Restaurant Payment",
  description:
    "Complete your order with our secure in-person payment option. Quick, convenient, and safe payment processing at our restaurant location.",
  openGraph: {
    title: "In-Person Payment | QASR AL MASHAWIAAT",
    description: "Secure and convenient in-person payment options available",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary",
    title: "In-Person Payment Options",
    description: "Secure restaurant payment methods",
  },
  keywords: [
    "in-person payment",
    "restaurant payment",
    "secure payment",
    "cash payment",
    "card payment",
    "payment methods",
    "on-site payment",
    "restaurant billing",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/payment/in-person",
  // },
};
const Page = () => {
  return <ClientInPerson />;
};

export default Page;
