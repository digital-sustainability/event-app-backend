import { Event } from '../event/event';
import { Speaker } from '../speaker/speaker';

export interface Session {
  id: number;
  title: string;
  abstract: string;
  formatted_abstract: string;
  merged_abstract?: string;
  label_presentations: string;
  video_conferencing_link?: string;
  video_conferencing_label?: string;
  position?: number;
  room: string;
  event_id: any;
  presentations: string;
  speakers?: Speaker[];
}
