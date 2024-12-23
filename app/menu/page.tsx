import { data } from "../Components/MenuCard/data";
import MenuCard from "../Components/MenuCard/MenuCard";
import ArrowBack from "../Components/ArrowBack/ArrowBack";
const page = () => {
  return (
    <main className="container mx-auto mt-10 mb-44">
      <section className="flex items-center justify-start gap-2">
        <ArrowBack />
        <h2 className="text-xl text-white font-bold">Choose From menu</h2>
      </section>
      <section className="mt-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
          {data.map((item) => (
            <MenuCard
              alt={item.alt}
              src={item.src}
              text={item.text}
              key={item.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
