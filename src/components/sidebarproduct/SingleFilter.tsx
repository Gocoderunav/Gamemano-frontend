import { FilterProps } from "@/utils/types";

type SingleFilterProps = {
  data: FilterProps[];
  name: string;
  selectedIds: string[];
  onChange: (id: string) => void;
};

function SingleFilter({ data, name, selectedIds, onChange }: SingleFilterProps) {
  return (
    <>
      {data.map(({ id, text }) => (
        <div key={id} className="p-2 flex items-center gap-2 text-white">
          <input
            type="checkbox"
            id={id}
            className="hidden peer"
            checked={selectedIds.includes(id)}
            name={name}
            value={text}
            onChange={() => onChange(id)}
          />
          <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
            <div className={`w-5 h-5 border border-white rounded-md ${selectedIds.includes(id) ? "bg-white" : "bg-[#2b2417]"} peer-checked:bg-white`} />
            {text}
          </label>
        </div>
      ))}
    </>
  );
}

export default SingleFilter;
