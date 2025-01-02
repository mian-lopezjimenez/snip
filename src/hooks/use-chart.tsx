import { useContext } from "react";

import { ChartContext } from "@/components/chart-wrapper/chart-provider";
import { ChartContextType } from "@/types";

const useChart = <T,>(): ChartContextType<T> => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a ChartProvider");
  }
  return context;
};

export default useChart;
