"use server";

import { revalidatePath } from "next/cache";

import { createShortUrlSchema } from "@/lib/schemas";

export async function createShortUrl(prevState: unknown, formData: FormData) {
  try {
    const validatedFields = createShortUrlSchema.safeParse({
      url: formData.get("url"),
    });

    if (!validatedFields.success) {
      return {
        url: "",
        success: "",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { url } = validatedFields.data;

    const hash = btoa(url).substring(0, 8);
    const shortUrl = `http://localhost:3000/${hash}`;

    return {
      url: shortUrl,
      success: "Short URL created successfully!",
    };
  } catch (_) {
    return {
      url: "",
      success: "",
    };
  } finally {
    revalidatePath("/");
  }
}
