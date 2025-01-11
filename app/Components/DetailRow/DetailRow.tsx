import { DetailRowProps } from "@/app/src/types/Components/DetailRow";

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className="flex-between gap-0 w-full">
      <p className="text-xl text-[#A5A7B1] font-semibold">{label}</p>
      <p className="text-xl text-white font-semibold capitalize">{value}</p>
    </div>
  );
};

export default DetailRow;
