"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UrlCopierProps {
  url: string;
}

export function UrlCopier({ url }: UrlCopierProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      toast.success("URL copied with success!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy URL");
    }
  };

  return (
    <div className="flex w-full max-w-[700px] items-center space-x-2">
      <Input type="text" value={url} readOnly aria-label="URL to copy" />
      <Button
        onClick={handleCopy}
        className="whitespace-nowrap"
        aria-label={isCopied ? "URL copied" : "Copy URL"}
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
