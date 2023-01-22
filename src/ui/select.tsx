import type { Dispatch, SetStateAction } from "react";
import React from "react";

type Props = {
  label: string;
  items: string[];
  setter: Dispatch<SetStateAction<string>>;
};

const Select = ({ label, items, setter }: Props) => {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <label
        htmlFor={label}
        className="min-w-40 text-sm font-medium text-white"
      >
        {label}
      </label>
      <select
        id={label}
        className="
        w-40
        rounded-lg border
        border-gray-600 bg-gray-700 bg-gray-50
        p-2.5 text-sm text-black
        text-gray-900
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
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
