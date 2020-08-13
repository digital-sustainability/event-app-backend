import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {EventSpeaker} from './event-speaker/event-speaker';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventSpeakerService {

  constructor(private http: HttpClient) { }

  getEventSpeakerById(id: number): Observable<EventSpeaker> {
    return this.http.get<EventSpeaker>(environment.apiURL + 'api/' + `eventSpeaker/${id}`);
  }

  getEventSpeakers(getParams?: any): Observable<EventSpeaker[]> {
    return this.http.get<EventSpeaker[]>(environment.apiURL + 'api/eventSpeaker', {
      params: getParams
    });
  }

  createEventSpeaker(eventSpeaker: EventSpeaker): Observable<EventSpeaker> {
    return this.http.post<EventSpeaker>(environment.apiURL + 'api/eventSpeaker', eventSpeaker);
  }

  updateEventSpeaker(eventSpeaker: EventSpeaker): Observable<EventSpeaker> {
    return this.http
      .patch<EventSpeaker>(environment.apiURL + `api/eventSpeaker/${eventSpeaker.id}`, eventSpeaker);
  }

  deleteEventSpeaker(value: any): Observable<EventSpeaker> {
    return this.http.post<EventSpeaker>(environment.apiURL + 'api/' + `eventSpeaker/destroy`, value);
  }
}
