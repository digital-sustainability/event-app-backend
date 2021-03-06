import {Speaker} from '../speaker/speaker';
import { Session } from '../session/session';

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
  video_conferencing_link?: string;
  video_conferencing_label?: string;
  room: string;
  session_id: any;
  event_id: any;
  speakers: Speaker[];
}
