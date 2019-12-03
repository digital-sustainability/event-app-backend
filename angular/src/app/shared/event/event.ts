import DateTimeFormat = Intl.DateTimeFormat;

export interface Event {
  id: number;
  title: string;
  description: string;
  formatted_description: string;
  start: any;
  end: any;
  location: string;
  image_path: string;
  url: string;
  url_label: string;
  published: boolean;
}

