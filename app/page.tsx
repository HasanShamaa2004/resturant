import HeroSection from "./Components/HeroSection/HeroSection";
import { data } from "./Components/MenuCard/data";
import { DishesData } from "./Components/DishesCard/DishesData";
import MenuSection from "./Components/MenuSection/MenuSection";
import DishesSection from "./Components/DishesSection/DishesSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "QASR AL MASHAWIAAT | Premium Grilled & Cold Dishes",
  description:
    "Discover our signature grilled specialties, cold dishes, and refreshing beverages. Known for exceptional grilled cuisine and diverse menu offerings in [Location].",
  keywords: [
    "restaurant",
    "grilled food",
    "cold dishes",
    "beverages",
    "dining",
  ],
  openGraph: {
    title: "QASR AL MASHAWIAAT | Premium Grilled & Cold Dishes",
    description:
      "Experience exceptional grilled specialties, cold dishes, and refreshing beverages at Restaurant Name.",
    type: "website",
    locale: "en_US",
    siteName: "QASR AL MASHAWIAAT",
  },
  twitter: {
    card: "summary_large_image",
    title: "QASR AL MASHAWIAAT | Premium Grilled & Cold Dishes",
    description:
      "Experience exceptional grilled specialties, cold dishes, and refreshing beverages at Restaurant Name.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // alternates: {
  //   canonical: "https://your-domain.com",
  // },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};
function App() {
  return (
    <main className="md:px-0 px-4">
      <HeroSection />
      <MenuSection data={data} />
      <DishesSection DishesData={DishesData} />
    </main>
  );
}

export default App;
