import { Metadata } from "next";
import ClientReview from "../Components/ClientReview/ClientReview";
export const metadata: Metadata = {
  title: "Customer Reviews | Best Grilled Food Restaurant",
  description:
    "Read authentic customer reviews about our famous grilled dishes and more. Discover why we’re a favorite for food lovers.",
  openGraph: {
    title: "Customer Reviews | Best Grilled Food Restaurant",
    description:
      "Discover what customers are saying about our delicious grilled dishes and excellent service.",
    type: "website",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary",
    title: "Customer Reviews | Best Grilled Food Restaurant",
    description:
      "Read reviews from happy customers about our tasty grilled dishes and more.",
  },
  keywords: [
    "customer reviews",
    "grilled food",
    "best restaurant reviews",
    "authentic reviews",
    "top grilled dishes",
    "restaurant feedback",
    "food reviews",
    "grilled food lovers",
  ],
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com/reviews/customers",
  // },
};
const Page = () => {
  return <ClientReview />;
};

export default Page;
