import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import { environment } from "../../environments/environment";
import { Event } from "./event/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(environment.apiURL + 'api/' + `event/${id}`);
  };

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.apiURL + 'api/event');
  };

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(environment.apiURL + 'api/event', event);
  };

  updateEvent(event: Event): Observable<Event> {
    return this.http.patch<Event>(environment.apiURL + `api/event/${event.id}`, event);
  };

  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(environment.apiURL + 'api/' + `event/${id}`);
  };
}
