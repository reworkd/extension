import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { Configuration, OpenAIApi } from "openai";
import { serverEnv } from "../../../env/schema.mjs";

const configuration = new Configuration({
  organization: serverEnv.OPENAI_ORGANIZATION as string,
  apiKey: serverEnv.OPENAI_API_KEY as string,
});
const openAiClient = new OpenAIApi(configuration);

export const eventRouter = createTRPCRouter({
  hello: publicProcedure
    .input(
      z.object({
        prompt: z.string(),
        mood: z.string(),
        type: z.string(),
        length: z.string(),
        topics: z.array(z.string()),
      })
    )
    .query(async ({ input }) => {
      const prompt = `I want to respond to the following: ${input.prompt}.
        Your response should be in a ${input.mood} tone and be ${input.length} in length.
        Write it as a ${input.type}.
        Include information from the following list of additional information: [${input.topics.join()}].
      `;

      const res = await openAiClient.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 500,
      });

      return {
        value: res.data.choices[0]?.text,
      };
    }),
});
