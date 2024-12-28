"use client";

import { useActionState, useEffect } from "react";

import { Scissors } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createShortUrl } from "@/lib/actions";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/spinner";
import { UrlCopier } from "./url-copier";

const ShortURLForm = () => {
  const [state, formAction, isPending] = useActionState(createShortUrl, {
    url: "",
    data: undefined,
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
    <>
      <form action={formAction} className="w-full md:w-[700px] flex gap-x-2">
        <div className="w-full flex flex-col gap-2">
          <Input
            name="url"
            placeholder="Insert your link"
            defaultValue={state.data?.url}
          />
          {state.errors?.url?.map((error) => (
            <span className="block text-sm text-red-500" key={error}>
              {error}
            </span>
          ))}
        </div>

        <Button disabled={isPending} type="submit">
          Submit {isPending ? <Spinner className="w-4 h-4" /> : <Scissors />}
        </Button>
      </form>
      {state.url && <UrlCopier url={state.url} />}
    </>
  );
};

export default ShortURLForm;
