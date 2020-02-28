import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient) { }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(environment.apiURL + 'api/topic');
  }

  createTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(environment.apiURL + 'api/topic', topic);
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.http.delete<Topic>(environment.apiURL + 'api/' + `topic/${id}`);
  }
}
