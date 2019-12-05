import DateTimeFormat = Intl.DateTimeFormat;

export interface Event {
  id: number;
  title: string;
  description: string;
  formatted_description: string;
  merged_description?: string; // formatted_description, but if empty, description as fallback
  start: any;
  end: any;
  location: string;
  image_path: string;
  url: string;
  url_label: string;
  published: boolean;
}

