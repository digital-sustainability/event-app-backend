import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {SessionSpeaker} from './session-speaker/session-speaker';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionSpeakerService {

  constructor(private http: HttpClient) { }

  getSessionSpeakerById(id: number): Observable<SessionSpeaker> {
    return this.http.get<SessionSpeaker>(environment.apiURL + 'api/' +`sessionSpeaker/${id}`);
  }

  getSessionSpeakers(getParams?: any): Observable<SessionSpeaker[]> {
    return this.http.get<SessionSpeaker[]>(environment.apiURL + 'api/sessionSpeaker', {
      params: getParams
    });
  }

  createSessionSpeaker(sessionSpeaker: SessionSpeaker): Observable<SessionSpeaker> {
    return this.http.post<SessionSpeaker>(environment.apiURL + 'api/sessionSpeaker', sessionSpeaker);
  }

  updateSessionSpeaker(sessionSpeaker: SessionSpeaker): Observable<SessionSpeaker> {
    return this.http.patch<SessionSpeaker>(environment.apiURL + `api/sessionSpeaker/${sessionSpeaker.id}`, sessionSpeaker);
  }

  deleteSessionSpeaker(value: any): Observable<SessionSpeaker> {
    return this.http.post<SessionSpeaker>(environment.apiURL + 'api/' + `sessionSpeaker/destroy`, value);
  }
}
