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
