import { useState } from "react";

import "../styles/globals.css";
import Logo from "../components/Logo";
import Select from "../ui/select";
import { QueryClientProvider } from "@tanstack/react-query/src/QueryClientProvider";
import { QueryClient } from "@tanstack/query-core";
import { useQuery } from "@tanstack/react-query";
// import { api } from "../utils/api";

function IndexPopup() {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");

  return (
    <div
      className="bg-black text-white"
      // style={{
      //   backgroundColor: "black",
      //   backgroundImage:
      //     "radial-gradient(at 100% 18%, rgb(3, 105, 161) 0, transparent 66%), radial-gradient(at 100% 79%, rgb(21, 94, 117) 0, transparent 35%)",
      // }}
    >
      <div className="flex w-96 flex-col gap-4 px-4 py-4">
        <div className="z-50 flex flex-row items-end justify-between border-b-[1px] border-b-white/10 backdrop-blur-md backdrop-brightness-125">
          <img
            src="https://reworkd.ai/wordmark-dark.svg"
            // alt=""
            className=" rounded object-cover"
          />
        </div>
        <div className="flex flex-row items-center gap-4">
          <label
            htmlFor="FirstName"
            className="block text-xs font-medium text-gray-200"
          >
            Prompt
          </label>
          <input
            type="text"
            id="FirstName"
            className="mt-1 w-full rounded-md  border-gray-700 bg-gray-800 p-2 text-sm text-white shadow-sm"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
        </div>
        <Select
          setter={setMood}
          label="Mood"
          items={["Happy", "Condescending", "Angry", "Sickly"]}
        />
        <Select
          setter={setLength}
          label="Length"
          items={["Short", "Medium", "Long"]}
        />
        <Select
          setter={setType}
          label="Type"
          items={["Poem", "Song", "Story"]}
        />
        <button className="rounded-xl bg-green-400 px-4 py-2 text-2xl">
          Generate
        </button>
      </div>
    </div>
  );
}

export default IndexPopup;
