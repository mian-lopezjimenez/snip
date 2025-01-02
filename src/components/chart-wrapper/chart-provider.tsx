"use client";

import { createContext } from "react";

import { ChartContextType, ChartProviderProps } from "@/types";

export const ChartContext = createContext<ChartContextType<any> | undefined>(
  undefined
);
const { Provider } = ChartContext;

const ChartProvider = <T,>({ data, children }: ChartProviderProps<T>) => {
  return <Provider value={{ data }}>{children}</Provider>;
};

export default ChartProvider;
