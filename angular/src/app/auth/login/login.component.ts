import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../shared/auth/auth.service';
import { User } from '../../shared/user/user';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  redirect: string;
  sub: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.redirect = params['return'];
    });
    this.loginForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return false;
    } else {
      this.authService.login(this.loginForm.value)
      .subscribe((user: User) => {
        this.snackbar.open(`Hi ${user.first_name}`, '', {
          duration: 3000,
        });
        if(this.redirect)
          this.router.navigate([this.redirect]);
        else
          this.router.navigate(['']);
      }, (err) => {
        console.log(err);
        this.snackbar.open('Invalid email or password', '', {
          duration: 3000,
          panelClass: 'fail'
        })
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
