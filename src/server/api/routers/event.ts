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
      })
    )
    .query(async ({ input }) => {
      const prompt = `Use the following as a prompt: ${input.prompt}.
        Your response should in a ${input.mood} tone and be ${input.length} in length.
        Write it as ${input.type}.
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
