import { Presentation } from '../presentation/presentation';
import { Speaker } from '../speaker/speaker';

export interface PresentationSpeaker {
  id: number;
  presentation_id: number | Presentation;
  speaker_id: number | Speaker;
}
