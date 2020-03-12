import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from 'src/app/shared/notification/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(environment.apiURL + 'api/notification');
  }

  sendNotification(notification: Notification): Observable<boolean> {
    return this.http.post<boolean>(environment.apiURL + 'api/notification/send', notification);
  }

  deleteNotification(id: number): Observable<Notification> {
    return this.http.delete<Notification>(environment.apiURL + 'api/' + `notification/${id}`);
  }
}
