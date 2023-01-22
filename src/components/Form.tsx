import Select from "../ui/select";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("http://localhost:3000/trpc/event/hello");
  return res.json();
};

const Logo: React.FC<{ width?: number; className?: string }> = ({
  width,
  className,
}) => {
  const { status } = useQuery(["users"], fetchUsers);

  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="bg-black text-white">
      <div className="flex w-96 flex-col gap-4 px-4 py-4">
        <div className="z-50 flex flex-row items-end justify-between border-b-[1px] border-b-white/10 backdrop-blur-md backdrop-brightness-125">
          <img
            src="https://reworkd.ai/wordmark-dark.svg"
            alt="Reworkd Word mark"
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
};

export default Logo;
