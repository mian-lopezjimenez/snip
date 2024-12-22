"use server";

import { revalidatePath } from "next/cache";

import { CreateShortURLResponse } from "@/lib/intefaces";
import { createShortUrlSchema } from "@/lib/schemas";

export async function createShortUrl(
  prevState: unknown,
  formData: FormData
): Promise<CreateShortURLResponse> {
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
  } catch (error) {
    return {
      url: "",
      success: "",
      error: {
        message:
          error instanceof Error ? error.message : "Something went wrong",
      },
    };
  } finally {
    revalidatePath("/");
  }
}
