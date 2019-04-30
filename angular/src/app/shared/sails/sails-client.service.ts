import { Injectable } from '@angular/core';
import { SailsService } from 'angular2-sails';
import { pipe, Observable } from 'rxjs';
import { CsrfService } from '../auth/csrf.service';
import { mergeMap, map } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SailsClientService {

  constructor(private sailsService: SailsService,
    private csrfService: CsrfService) { }

  request(options): Observable<any> {
    //Add required CSRF Token header
    options.headers = options.headers || {};
    console.log(options.method)
    if(options.method !== 'get') {
      return this.csrfService.getCSRFToken().pipe(mergeMap((csrf) => {
        options.headers['X-CSRF-Token'] = csrf;
        return this.sailsService.request(options)
          .pipe(map((res) => (<any>(res)).data));
      }));
    }
    return this.sailsService.request(options)
      .pipe(map((res) => (<any>(res)).data));
  }

  get(url, data?, headers?): Observable<any> {
    const options = {url, data, headers, method: 'get'};
    return this.request(options);
  }

  post(url, data, headers?): Observable<any> {
    const options = {url, data, headers, method: 'post'};
    return this.request(options);
  }

  patch(url, data, headers?): Observable<any> {
    const options = {url, data, headers, method: 'patch'};
    return this.request(options);
  }

  delete(url, headers?): Observable<any> {
    const options = {url, headers, method: 'delete'};
    return this.request(options);
  }

  /**
   * Listen to Socket events
   * @param event Socket event name
   */
  on<T>(event): Observable<T> {
    return this.sailsService.on(event)
      .pipe(map((res) => (<any>(res)).data));
  }

  /**
   * Unsubscribe from each connected socket room
   */
  off(): Observable<any> {
    return this.post('/api/socket/off', {});
  }
}
