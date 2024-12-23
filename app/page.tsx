import HeroSection from "./Components/HeroSection/HeroSection";
import { data } from "./Components/MenuCard/data";
import { DishesData } from "./Components/DishesCard/DishesData";
import MenuSection from "./Components/MenuSection/MenuSection";
import DishesSection from "./Components/DishesSection/DishesSection";
function App() {
  return (
    <main>
      <HeroSection />
      <MenuSection data={data} />
      <DishesSection DishesData={DishesData} />
    </main>
  );
}

export default App;
