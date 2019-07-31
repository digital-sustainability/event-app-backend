import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {Speaker} from "./speaker/speaker";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  getSpeakerById(id: number): Observable<Speaker> {
    return this.http.get<Speaker>(environment.apiURL + 'api/' + `speaker/${id}`);
  };

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get<Speaker[]>(environment.apiURL + 'api/speaker');
  };

  createSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.post<Speaker>(environment.apiURL + 'api/speaker', speaker);
  };

  updateSpeaker(speaker: Speaker): Observable<Speaker> {
    return this.http.patch<Speaker>(environment.apiURL + `api/speaker/${speaker.id}`, speaker);
  };

  deleteSpeaker(id: number): Observable<Speaker> {
    return this.http.delete<Speaker>(environment.apiURL + 'api/' + `speaker/${id}`);
  };
}
