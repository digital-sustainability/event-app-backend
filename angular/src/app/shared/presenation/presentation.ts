import {Speaker} from "../speaker/speaker";

export interface Presentation {
  id: number;
  title: string;
  abstract: string;
  formatted_abstract: string;
  merged_abstract?: string;
  slides: string;
  start: any;
  end: any;
  access_token: string;
  position?: number;
  room: string;
  session_id: number;
  speakers?: Speaker[];
}
