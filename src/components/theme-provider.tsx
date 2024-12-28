"use client";

import { Suspense } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <Suspense>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Suspense>
  );
}
