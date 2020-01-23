import { Category } from '../category/category';
import { Event } from '../event/event';

export interface EventCategory {
  id?: number;
  event_id: number | Event;
  category_id: number | Category;
}
