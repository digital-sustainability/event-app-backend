import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { environment } from '../../environments/environment';
import {Presentation} from './presentation/presentation';


@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(private http: HttpClient) { }

  getPresenationById(id: number, populated?: boolean): Observable<Presentation> {
    // populated means that the event_id inside the session would be populated too ('nested population')
    // session_id, event_id, ... are always populated
    if (populated) {
      return this.http.get<Presentation>(environment.apiURL + 'api/' + `presentation/${id}/populated`);
    } else {
      return this.http.get<Presentation>(environment.apiURL + 'api/' + `presentation/${id}`);
    }
  }

  getPresentations(getParams?: any): Observable<Presentation[]> {
    return this.http.get<Presentation[]>(environment.apiURL + 'api/presentation', {
      params: getParams
    });
  }

  createPresentation(presentation: Presentation): Observable<Presentation> {
    return this.http.post<Presentation>(environment.apiURL + 'api/presentation', presentation);
  }

  updatePresentation(presentation: Presentation): Observable<Presentation> {
    return this.http.patch<Presentation>(environment.apiURL + `api/presentation/${presentation.id}`, presentation);
  }

  deletePresentation(id: number): Observable<Presentation> {
    return this.http.delete<Presentation>(environment.apiURL + 'api/' + `presentation/${id}`);
  }
}
