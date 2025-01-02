"use client";

import { useTransition } from "react";

import { RefreshCw } from "lucide-react";
import { toast } from "sonner";

import {
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Tooltip,
} from "@/components/ui/tooltip";
import { revalidateIndicators } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/spinner";

const RefreshIndicators = () => {
  const [isPending, startTransition] = useTransition();

  const action = async () => {
    startTransition(async () => {
      await revalidateIndicators();

      toast.info(
        `Dashboard information refreshed at ${new Date().toLocaleString()}`
      );
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            onClick={action}
            disabled={isPending}
          >
            {isPending ? <Spinner /> : <RefreshCw />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Refresh dashboard information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RefreshIndicators;
