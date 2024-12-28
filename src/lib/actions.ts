"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { z } from "zod";
import { nanoid } from "nanoid";

import { createClient } from "@/utils/supabase/server";
import { CreateShortURLResponse } from "@/types";
import { createShortUrlSchema } from "@/lib/schemas";

export async function createShortUrl(
  prevState: unknown,
  formData: FormData
): Promise<CreateShortURLResponse> {
  try {
    const supabase = await createClient();
    const data = Object.fromEntries(formData) as z.infer<
      typeof createShortUrlSchema
    >;
    const validatedFields = createShortUrlSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        url: "",
        data,
        success: "",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { url } = validatedFields.data;

    const urlId: string = nanoid(8);
    const shortUrl: string = `${process.env.NEXT_PUBLIC_BASE_URL}/${urlId}`;

    const { error } = await supabase.from("urls").insert({
      id: crypto.randomUUID(),
      original_url: url,
      short_url: shortUrl,
      user_id: null,
    });

    if (error) {
      return {
        url: "",
        success: "",
        error: {
          message: error.message,
        },
      };
    }

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

export async function signOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (!error) {
    revalidatePath("/");
    redirect("/");
  }
}

export async function login() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });

  if (error) {
    redirect("/error");
    return;
  }

  if (data.url) {
    redirect(data.url);
  }
}
