import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      greeting: `Hello`,
    };
  }),
});
