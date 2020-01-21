export interface Speaker {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  position: string;
  organization: string;
  short_bio: string;
  formatted_short_bio: string;
  merged_short_bio?: string;
  photo_url: string;
}
