import { notFound } from "next/navigation";
import { DishesData } from "@/app/Components/DishesCard/DishesData";
import ClientDetails from "@/app/Components/ClientDetails/ClientDetails";
import { Metadata } from "next";

interface PageProps {
  params: { dishesId: string };
}
// Generate metadata for each dish
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const dishesId = params.dishesId as string;

  const dishId = Number(dishesId);
  const dish = DishesData.find((item) => item.id === dishId);

  return {
    title: dish ? `${dish.title} - Details` : "Dish Not Found",
    description: dish
      ? `View details for ${dish.title}`
      : "Dish details page not found",
  };
}

// Generate static paths for pre-rendering
export function generateStaticParams() {
  return DishesData.map((dish) => ({
    dishesId: dish.id.toString(),
  }));
}

// Dish details page component
export default function DishDetailsPage({ params }: PageProps) {
  const dishesId = params.dishesId as string;

  // Convert dishesId to a number safely
  const dishId = Number(dishesId);
  const dish = DishesData.find((item) => item.id === dishId);

  // Handle dish not found case
  if (!dish) {
    notFound();
  }

  // Render client-side details for the dish
  return <ClientDetails data={dish} />;
}
