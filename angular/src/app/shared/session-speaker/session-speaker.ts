import { Session } from '../session/session';
import { Speaker } from '../speaker/speaker';

export interface SessionSpeaker {
  id: number;
  session_id: number | Session;
  speaker_id: number | Speaker;
}
