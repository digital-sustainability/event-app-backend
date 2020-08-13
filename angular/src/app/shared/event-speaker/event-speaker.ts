import { Speaker } from '../speaker/speaker';
import { Event } from '../event/event';

export interface EventSpeaker {
  id: number;
  event_id: number | Event;
  speaker_id: number | Speaker;
}
