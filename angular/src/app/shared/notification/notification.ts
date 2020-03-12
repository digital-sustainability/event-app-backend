export interface Notification {
  id?: number;
  createdAt: number;
  title: string;
  body: string;
  topic?: string;
  topics?: string;
}
