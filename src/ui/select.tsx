import type { Dispatch, SetStateAction } from "react";
import React from "react";

type Props = {
  label: string;
  items: { label: string; value: string }[];
  setter: Dispatch<SetStateAction<string>>;
};

const Select = ({ label, items, setter }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <label htmlFor={label} className="text-sm font-medium text-gray-300">
        {label}
      </label>
      <select
        id={label}
        className="
        rounded-lg
        border border-gray-600
        bg-slate-900
        p-2.5 text-sm
        text-white
        placeholder-gray-400
        focus:border-blue-500
        focus:ring-blue-500
        focus:ring-blue-500
        "
        onChange={(e) => {
          setter(e.target.value);
        }}
      >
        {/*<option selected>Choose a country</option>*/}
        {items.map((item, i) => (
          <option key={i} value={item.value} className="text-white">
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
