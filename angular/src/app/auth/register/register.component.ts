import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user/user';
import { AuthService } from "../../shared/auth/auth.service";
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'first_name': new FormControl('', [
        Validators.required
      ]),
      'last_name': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'street': new FormControl('', [
        Validators.required
      ]),
      'zip_code': new FormControl('', [
        Validators.required
      ]),
      'city': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      'confirm_password': new FormControl('', [
        Validators.required,
        this.passwordConfirming.bind(this)
      ]),
    });
  }

  passwordConfirming(fieldControl: FormControl): { invalidConfirmation: boolean } {
    if(this.registerForm)
      return (fieldControl.value !== this.registerForm.get('password').value) ?
        { invalidConfirmation: true } : null;
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirm_password() {
    return this.registerForm.get('confirm_password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  onSubmit():boolean {
    if (this.registerForm.invalid) {
      return false;
    } else {
      this.authService.register(this.registerForm.value)
      .subscribe((user: User) => {
        let navigationExtras: NavigationExtras = {
          queryParams: user
        }
        this.router.navigate(['register/successful'], navigationExtras);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Email already registered.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
    }
  }

}
