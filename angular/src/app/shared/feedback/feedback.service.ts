import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JoinedFeedback } from './joined-feedback';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  find(): Observable<JoinedFeedback[]> {
    return this.http.get<JoinedFeedback[]>(`${environment.apiURL}api/feedback`);
  }

}
