export interface Session {
  id: number;
  title: string;
  abstract: string;
  formatted_abstract: string;
  merged_abstract?: string;
  label_presentations: string;
  position?: number;
  room: string;
  event_id: any;
  presentations: string;
}
