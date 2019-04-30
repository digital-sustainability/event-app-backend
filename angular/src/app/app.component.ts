import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { SailsService } from 'angular2-sails';
import { AuthService } from './shared/auth/auth.service';
import { User } from './shared/user/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sails Angular';

  constructor(private _sailsService: SailsService,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar){}

  ngOnInit() {
     //Init Sails service and request CSRF Token and check login
     let opts = {
      url: environment.apiURL,
      transports: ['websocket'],
      reconnection: true
    }
    this._sailsService.connect(opts);

    //this.requestCSRFToken()
    this.checkLogin();
  }

  checkLogin() {
    this.authService.checkLogin()
      .subscribe();
  }

  logout() {
    this.authService.logout()
    .subscribe(() => {
      this.router.navigate(['login']);
      this.snackbar.open('Successfully logged out', '', {
        duration: 3000
      });
    }, (err) => {
      console.log(err);
    });
  }

  get authenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get authenticatedUser(): User {
    return this.authService.getAuthenticatedUser();
  }
  
}
