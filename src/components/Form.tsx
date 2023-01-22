import Select from "../ui/select";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface Request {
  prompt: string;
  mood: string;
  length: string;
  type: string;
}

interface Response {
  result: {
    data: {
      json: {
        value: string;
      };
    };
  };
}

const openAiRequest = async (request: Request) => {
  const res = await fetch(
    `http://localhost:3000/api/trpc/event.hello?batch=1&input=${encodeURIComponent(
      JSON.stringify({
        "0": {
          json: request,
        },
      })
    )}`,
    {
      mode: "cors",
    }
  );

  const data = (await res.json()) as Response[];
  return data[0]?.result?.data?.json;
};
const Form = () => {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");

  const { mutate, isLoading, isSuccess, data } = useMutation(
    ["submit"],
    openAiRequest,
    {}
  );
  console.log(data);

  return (
    <div className="bg-black text-white">
      <div className="flex w-96 flex-col gap-4 px-4 py-4">
        <div className="z-50 flex flex-row items-end justify-between border-b-[1px] border-b-white/10 backdrop-blur-md backdrop-brightness-125">
          <img
            src="https://reworkd.ai/wordmark-dark.svg"
            alt="Reworkd WordMark"
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
        {isSuccess && <div>{data?.value}</div>}
        {isLoading || (
          <button
            className="rounded-xl bg-green-400 px-4 py-2 text-2xl"
            onClick={() => {
              mutate({
                prompt,
                mood,
                length,
                type,
              });
            }}
          >
            Generate
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
