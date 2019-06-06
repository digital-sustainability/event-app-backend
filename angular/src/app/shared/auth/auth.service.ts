import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Observable, pipe, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: User;

  constructor(private http: HttpClient) {}

  login(loginDetails): Observable<User> {
    return this.http.post<User>(environment.apiURL + 'api/login',
      loginDetails)
      .pipe(map((user) => {
        this.authenticatedUser = user;
        return user;
      }));
  }

  update(user: Partial<User>): Observable<User>{
    return this.http.patch<User>(environment.apiURL + `api/user/${this.authenticatedUser.id}`, user)
    .pipe(map((user: User) => {
      this.authenticatedUser = user;
      return user;
    }));
  }

  findOne(id: number): Observable<User> {
    return this.http.get<User>(environment.apiURL + `user/\${id}`);
  }

  /**
   * Used to check if the user is logged in after a page refresh.
   * It automatically logs in the user and sets the authenticated user
   * if the server returns a positive response.
   */
  checkLogin(): Observable<boolean> {
    return this.http.get<User>(environment.apiURL + 'api/check-login')
      .pipe(map((user) => {
        this.authenticatedUser = user;
        return user ? true : false;
      }),
      catchError(e => {
        return of(false);
      }));
  }

  logout(): Observable<any> {
    return this.http.post<any>(environment.apiURL + 'api/logout', {})
      .pipe(map(() => {
        this.authenticatedUser = null;
        return null;
      }));
  }

  getAuthenticatedUser(): User {
    return this.authenticatedUser
  }

  getAuthenticatedProjectId(): number {
    if(!this.authenticatedUser ||
      this.authenticatedUser.projects.length === 0)
      return -1;
    return this.authenticatedUser.projects[0].id;
  }

  isProjectOwner(projectId: number): boolean {
   return this.getAuthenticatedProjectId() === projectId;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser ? true : false
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(environment.apiURL + 'api/user',
      user);
  }

  confirm(userIdAndToken): Observable<any> {
    return this.http.post<any>(environment.apiURL + 'api/register/confirm',
      userIdAndToken);
  }

}
