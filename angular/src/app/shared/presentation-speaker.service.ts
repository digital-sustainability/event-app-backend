import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {PresentationSpeaker} from './presentation-speaker/presentation-speaker';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PresentationSpeakerService {

  constructor(private http: HttpClient) { }

  getPresentationSpeakerById(id: number): Observable<PresentationSpeaker> {
    return this.http.get<PresentationSpeaker>(environment.apiURL + 'api/' + `presentationSpeaker/${id}`);
  }

  getPresentationSpeakers(getParams?: any): Observable<PresentationSpeaker[]> {
    return this.http.get<PresentationSpeaker[]>(environment.apiURL + 'api/presentationSpeaker', {
      params: getParams
    });
  }

  createPresentationSpeaker(presentationSpeaker: PresentationSpeaker): Observable<PresentationSpeaker> {
    return this.http.post<PresentationSpeaker>(environment.apiURL + 'api/presentationSpeaker', presentationSpeaker);
  }

  updatePresentationSpeaker(presentationSpeaker: PresentationSpeaker): Observable<PresentationSpeaker> {
    return this.http
      .patch<PresentationSpeaker>(environment.apiURL + `api/presentationSpeaker/${presentationSpeaker.id}`, presentationSpeaker);
  }

  deletePresentationSpeaker(value: any): Observable<PresentationSpeaker> {
    return this.http.post<PresentationSpeaker>(environment.apiURL + 'api/' + `presentationSpeaker/destroy`, value);
  }
}
