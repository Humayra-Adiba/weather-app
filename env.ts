import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    WEATHER_API_KEY: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
});
