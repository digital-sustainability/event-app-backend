import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { pipe, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  private csrf: string;

  constructor(private http: HttpClient) { }

  requestCSRFToken(): Observable<string> {
    return this.http.get<any>(environment.apiURL + 'api/csrf-token')
      .pipe(map((res) => {
        this.csrf = res._csrf
        console.log(this.csrf);
        return res._csrf
      }));
  }

  getCSRFToken(): Observable<string> {
    if(this.csrf)
      return of(this.csrf);
    return this.requestCSRFToken();
  }

}
