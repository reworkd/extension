import type { Dispatch, SetStateAction } from "react";
import React from "react";

type Props = {
  label: string;
  value: string;
  items: { label: string; value: string }[];
  setter: Dispatch<SetStateAction<string>>;
};

const Select = ({ value, label, items, setter }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <label htmlFor={label} className="text-xs font-medium text-gray-200">
        {label}
      </label>
      <select
        id={label}
        className="
        rounded-md
        border-[1px]
        border-white/20
        bg-purple-900/50
        p-2.5 text-sm
        text-white
        placeholder-gray-400
        focus:border-blue-500
        focus:ring-blue-500
        focus:ring-blue-500
        "
        value={value}
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
