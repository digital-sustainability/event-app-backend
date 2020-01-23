import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventCategory } from './event-category/event-category';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventCategoryService {

  constructor(private http: HttpClient) { }

  createEventCategory(eventCategory: EventCategory): Observable<EventCategory> {
    return this.http.post<EventCategory>(environment.apiURL + 'api/eventCategory', eventCategory);
  }

  deleteEventCategory(value: EventCategory): Observable<EventCategory> {
    return this.http.post<EventCategory>(environment.apiURL + 'api/eventCategory/destroy', value);
  }
}
