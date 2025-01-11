import { Metadata } from "next";
import ClientMenu from "../Components/ClientMenu/ClientMenu";
export const metadata: Metadata = {
  title: "International Menu | Middle Eastern & Mediterranean Cuisine",
  description:
    "Explore our diverse menu featuring Egyptian, Turkish, Syrian, and Moroccan dishes. From grilled specialties to cold drinks and authentic sandwiches.",
  openGraph: {
    title: "International Menu | Middle Eastern & Mediterranean Cuisine",
    description: "Experience authentic Middle Eastern and Mediterranean dishes",
    type: "website",
    images: [
      {
        url: "/menu-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Menu preview",
      },
    ],
  },
  keywords: [
    "Middle Eastern food",
    "Mediterranean cuisine",
    "Egyptian dishes",
    "Turkish food",
    "Syrian cuisine",
    "Moroccan dishes",
    "grilled food",
    "cold drinks",
    "international menu",
  ],
};
const page = () => {
  return <ClientMenu />;
};

export default page;
