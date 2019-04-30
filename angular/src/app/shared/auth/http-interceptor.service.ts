import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CsrfService } from './csrf.service';
import { environment } from '../../../environments/environment';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private csrfService: CsrfService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.method !== 'GET') {
      return this.csrfService.getCSRFToken().pipe(mergeMap((csrf) => {
        request = request.clone({
          setHeaders: {
            'X-CSRF-Token': csrf
          },
          withCredentials: !environment.production
        });
        return next.handle(request);
      }));
    }
    else {
      request = request.clone({
        withCredentials: !environment.production
      });
      return next.handle(request);
    }
  }
}
