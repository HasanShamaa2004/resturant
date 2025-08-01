import { notFound } from "next/navigation";
import { DishesData } from "@/app/Components/DishesCard/DishesData";
import dynamic from "next/dynamic";

const ClientDetails = dynamic(
  () => import("@/app/Components/ClientDetails/ClientDetails")
);

interface PageProps {
  params: Promise<{ dishesId: string }>;
}

export function generateStaticParams() {
  return DishesData.map((dish) => ({
    dishesId: dish.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params; // أضف await هنا
  const dish = DishesData.find(
    (item) => item.id === Number(resolvedParams.dishesId)
  );
  return {
    title: dish ? `${dish.title} - Details` : "Dish Not Found",
    description: dish
      ? `View details for ${dish.title}`
      : "Dish details page not found",
  };
}

export default async function DishDetailsPage({ params }: PageProps) {
  const resolvedParams = await params; // أضف await هنا
  const dish = DishesData.find(
    (item) => item.id === Number(resolvedParams.dishesId)
  );
  if (!dish) notFound();

  return <ClientDetails data={dish} />;
}
