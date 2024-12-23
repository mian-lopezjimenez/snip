"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { CreateShortURLResponse } from "@/types";
import { createShortUrlSchema } from "@/lib/schemas";
import { createClient } from "@/utils/supabase/server";

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
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}auth/callback`,
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
