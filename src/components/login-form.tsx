"use client";

import { useActionState } from "react";

import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { login } from "@/lib/actions";
import Spinner from "@/components/spinner";

const LoginForm = () => {
  const [, formAction, isPending] = useActionState(login, undefined);

  return (
    <form className="flex justify-center" action={formAction}>
      <Button disabled={isPending} className="w-52" variant="secondary">
        {isPending ? (
          <Spinner className="w-4 h-4" />
        ) : (
          <>
            <Github />
            Github
          </>
        )}
      </Button>
    </form>
  );
};

export default LoginForm;
