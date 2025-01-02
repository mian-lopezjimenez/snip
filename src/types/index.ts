import { ReactNode } from "react";

export interface CreateShortURLResponse {
  url: string;
  data?: { url: string };
  success: string;
  errors?: {
    url?: string[];
  };
  error?: {
    message: string;
  };
}

export interface Feature {
  icon: ReactNode;
  title: string;
  content: string;
}

export interface IndicatorsResponse {
  value: number;
  percentage: string;
}

export interface MonthClicks {
  month: string;
  totalClicks: number;
  uniqueClicks: number;
}

export interface CountryClicks {
  country: string;
  totalClicks: number;
  uniqueClicks: number;
}

export interface ChartProviderProps<T> {
  data: T[];
  children: React.ReactNode;
}

export interface ChartContextType<T> {
  data: T | undefined;
}
