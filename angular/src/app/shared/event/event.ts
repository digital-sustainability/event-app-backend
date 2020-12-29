import DateTimeFormat = Intl.DateTimeFormat;
import { Category } from '../category/category';
import { Speaker } from '../speaker/speaker';
import { Session } from '../session/session';
import { Presentation } from '../presentation/presentation';

export interface Event {
  id: number;
  title: string;
  description: string;
  formatted_description: string;
  merged_description?: string; // formatted_description, but if empty, description as fallback
  formatted_lead: string;
  start: any;
  end: any;
  location: string;
  image_path: string;
  url: string;
  url_label: string;
  video_conferencing_link?: string;
  video_conferencing_label?: string;
  published: boolean;
  categories: Category[];
  speakers: Speaker[];

  sessions: Session[];
  presentations: Presentation[];
}

