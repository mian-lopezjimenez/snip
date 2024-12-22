"use client";

import { useActionState, useEffect } from "react";

import { Scissors } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createShortUrl } from "@/lib/actions";
import { Input } from "@/components/ui/input";

const ShortURLForm = () => {
  const [state, formAction, isPending] = useActionState(createShortUrl, {
    url: "",
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      return;
    }

    if (state.error) {
      toast.error(state?.error?.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="w-full md:w-[700px] flex gap-x-2">
      <div className="w-full flex flex-col gap-2">
        <Input name="url" placeholder="Insert your link" />
        {state.errors?.url &&
          state.errors.url.map((error) => (
            <span className="block text-sm text-red-500" key={error}>
              {error}
            </span>
          ))}
      </div>
      <Button disabled={isPending} type="submit">
        Submit <Scissors />
      </Button>
    </form>
  );
};

export default ShortURLForm;
