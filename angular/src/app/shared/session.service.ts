import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Session} from "./session/session";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  getSessionById(id:number): Observable<Session> {
    return this.http.get<Session>(environment.apiURL + 'api/' + `session/${id}`);
  };

  getSessions(getParams?: any): Observable<Session[]> {
    return this.http.get<Session[]>(environment.apiURL + 'api/session', {
      params: getParams
    });
  };

  createSession(session: Session): Observable<Session> {
    return this.http.post<Session>(environment.apiURL + 'api/session', session);
  };

  updateSession(session: Session): Observable<Session> {
    return this.http.patch<Session>(environment.apiURL + `api/session/${session.id}`, session);
  };

  deleteSession(id: number): Observable<Session> {
    return this.http.delete<Session>(environment.apiURL + 'api/' + `session/${id}`);
  };
}
