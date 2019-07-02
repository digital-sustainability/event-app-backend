import {Speaker} from "../speaker/speaker";

export interface Presentation {
  id: number;
  title: string;
  abstract: string;
  slides: string;
  start: any;
  end: any;
  access_token: string;
  room: string;
  session_id: number;
  speakers? : Speaker[];
}
