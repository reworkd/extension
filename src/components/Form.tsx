import Select from "../ui/select";
import {ChangeEvent, useState} from "react";
import { useMutation } from "@tanstack/react-query";
import Loader from "../ui/loader";
import Button from "./Button";
import { FaCopy } from "react-icons/fa";
import InputField from "./InputField";

interface Request {
  prompt: string;
  mood: string;
  length: string;
  type: string;
  topics: string[];
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

type TopicConfig = {
  topic: string;
  color: string;
};

const Form = ({ onClose }: { onClose?: () => void }) => {
  const [prompt, setPrompt] = useState("");
  const [mood, setMood] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");
  const [currentTopic, setCurrentTopic] = useState<string>("");
  const [topics, setTopics] = useState<TopicConfig[]>([]);

  const { mutate, isLoading, isSuccess, data, reset } = useMutation(
    ["submit"],
    openAiRequest,
    {}
  );

  const promptField = (
    <div className="flex flex-row items-center gap-4">
      <InputField value={prompt} onChange={(e: ChangeEvent<HTMLInputElement>) => {setPrompt(e.target.value);}}>
        Respond to
      </InputField>
    </div>
  );

  const moodFields = (
    <div className="flex flex-row items-center gap-4">
      <Select
        setter={setMood}
        value={mood}
        label="Mood"
        items={[
          { label: "😊 Happy", value: "happy" },
          { label: "🙃 Condescending", value: "condescending" },
          { label: "😡 Angry", value: "angry" },
          { label: "🤔 Thoughtful", value: "thoughtful" },
          { label: "🤪 Crazy", value: "crazy" },
          { label: "🤯 Insane", value: "insane" },
          { label: "🤬 Angry", value: "angry" },
          { label: "🤮 Sick", value: "sickly" },
          { label: "🤭 Shy", value: "shy" },
          { label: "🤫 Quiet", value: "quiet" },
          { label: "🤥 Lying", value: "lying" },
          { label: "🤤 Drooling", value: "drooling" },
          { label: "🤢 Disgusted", value: "disgusted" },
          { label: "🤠 Cowboy", value: "cowboy" },
          { label: "🤡 Clown", value: "clown" },
          { label: "🤖 Robot", value: "robot" },
          { value: "alien", label: "👽 Alien" },
          { value: "evil", label: "👿 Evil" },
          { value: "horse", label: "🐴 Horse" },
        ]}
      />
      <Select
        setter={setLength}
        value={length}
        label="Length"
        items={[
          { label: "📄 Short", value: "short" },
          { label: "📕 Medium", value: "medium" },
          { label: "📚 Long", value: "long" },
        ]}
      />
      <Select
        setter={setType}
        label="Type"
        value={type}
        items={[
          { label: "💼 Normal", value: "normal" },
          { label: "📜 Poem", value: "poem" },
          { label: "🎵 Song", value: "song" },
          { label: "🎨 Story", value: "story" },
          { label: "📝 Essay", value: "essay" },
          { label: "📃 Article", value: "article" },
          { label: "📜 Letter", value: "letter" },
          { label: "📝 Email", value: "email" },
          { label: "📝 Tweet", value: "tweet" },
          { label: "📝 Reddit Post", value: "reddit" },
        ]}
      />
    </div>
  );

  const addTopicConfig = (topic: string) => {
    if (topic === "") {
      return;
    }
    setTopics([
      ...topics,
      {
        topic: topic,
        color: "#" + Math.floor(Math.random() * 16777215).toString(16), // Random color
      },
    ]);
    setCurrentTopic("");
  };

  const removeTopic = (i: number) => {
    const newTopics = [...topics];
    newTopics.splice(i, 1);
    setTopics(newTopics);
  };

  const topicFields = (
    <div>
      <div className="flex max-w-md flex-wrap gap-2 ">
        {topics.map((topic, i) => (
          <div
            key={`${topic.topic}-${topic.color}-${i}`}
            className="flex flex-wrap gap-2 rounded-xl px-2 my-1"
            style={{ background: topic.color }}
          >
            {topic.topic}
            <div
              className="cursor-pointer text-black"
              onClick={() => removeTopic(i)}
            >
              x
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <InputField value={currentTopic} onChange={(e: ChangeEvent<HTMLInputElement>) => {setCurrentTopic(e.target.value);}}>
          Talk about
        </InputField>
        <Button onClick={() => addTopicConfig(currentTopic)} className="py-1">Add</Button>
      </div>
    </div>
  );

  const results = (
    <pre
      style={{
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
      }}
      className="rounded-md bg-gray-800 p-4 text-sm"
    >
      {data?.value}
    </pre>
  );

  const showForm = !isLoading && !isSuccess;

  return (
      <div className="rounded-lg bg-black min-w-[32em] min-h-[20em] b-[1px] border-b-white/10 text-white max-w-4xl shadow-2xl">
        <div className="flex flex-col h-full" style={{ backgroundImage: "radial-gradient(circle at 50% -40vh, #a21caf , transparent 70vh"}}>
          <div className="rounded-lg p-5 flex flex-row items-center justify-between border-b-[1px] border-b-white/20 backdrop-blur-md backdrop-brightness-125">
            <img
              src="/wordmark-dark.svg"
              alt="Reworkd WordMark"
              className=" rounded object-cover"
              width={175}
            />
            <Button onClick={onClose}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
          <div className="p-5 flex h-full justify-evenly flex-col gap-4">

            {showForm && promptField}
            {showForm && moodFields}
            {showForm && topicFields}
            {isLoading && (
              <Loader size={60} className="flex flex-row justify-center" />
            )}
            {isSuccess && results}
            {showForm && (
              <Button
                className="justify-center px-4 py-2 text-2xl"
                onClick={() => {
                  mutate({
                    prompt,
                    mood,
                    length,
                    type,
                    topics: topics.map((topic) => topic.topic),
                  });
                }}
              >
                Generate
              </Button>
            )}
            {isSuccess && (
              <div className="flex flex-row items-center justify-center gap-2">
                <Button
                  onClick={reset}
                  className="px-4 py-2 text-2xl"
                >
                  Reset
                </Button>
                <Button
                  onClick={onClose}
                  className="bg-gray-800 px-4 py-2 text-2xl"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    void window.navigator.clipboard
                      .writeText(data?.value || "")
                      .then();
                  }}
                >
                  <FaCopy />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Form;
