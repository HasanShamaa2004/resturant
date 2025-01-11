import { PriceRowProps } from "@/app/src/types/Components/PriceRow";

const PriceRow = ({ isTotal = false, label, value }: PriceRowProps) => {
  return (
    <div className="flex-between gap-0 w-full">
      <p
        className={`text-lg font-semibold ${
          isTotal ? "text-white" : "text-[#A5A7B1]"
        }`}
      >
        {label}
      </p>
      <p
        className={`text-lg font-semibold ${
          isTotal ? "text-white" : "text-[#A5A7B1]"
        }`}
      >
        {value}
      </p>
    </div>
  );
};

export default PriceRow;
