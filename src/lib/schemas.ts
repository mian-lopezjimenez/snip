import { z } from "zod";

export const createShortUrlSchema = z.object({
  url: z.string().url(),
});
