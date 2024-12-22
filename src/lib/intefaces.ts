export interface CreateShortURLResponse {
  url: string;
  success: string;
  errors?: {
    url?: string[];
  };
  error?: {
    message: string;
  };
}
