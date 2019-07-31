import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { User } from '../../shared/user/user';
import { NavigationExtras, Router } from '../../../../node_modules/@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { initChangeDetectorIfExisting } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  
  constructor(private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'first_name': new FormControl(this.user.first_name, [
        Validators.required
      ]),
      'last_name': new FormControl(this.user.last_name, [
        Validators.required
      ]),
      'email': new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      'street': new FormControl(this.user.street, [
        Validators.required
      ]),
      'zip_code': new FormControl(this.user.zip_code, [
        Validators.required
      ]),
      'city': new FormControl(this.user.city, [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.minLength(10)
      ]),
      'confirm_password': new FormControl('', [
        this.passwordConfirming.bind(this),
        Validators.minLength(10)
      ]),
      'old_password': new FormControl('', [
        Validators.required
      ]),
    });
  }

  passwordConfirming(fieldControl: FormControl): { invalidConfirmation: boolean } {
    if(this.editForm){
      return (fieldControl.value !== this.editForm.get('password').value) ?
        { invalidConfirmation: true } : null;
    }
  }

  get user() {
    return this.authService.getAuthenticatedUser();
  }

  get password() {
    return this.editForm.get('password');
  }

  get confirm_password() {
    return this.editForm.get('confirm_password');
  }

  get old_password() {
    return this.editForm.get('old_password');
  }

  get email() {
    return this.editForm.get('email');
  }

  onSubmit():boolean {
    if (this.editForm.invalid) {
      return false;
    } else {
      let inputs = this.editForm.value;
      if(!inputs.password){
        delete inputs.password;
        delete inputs.password_confirm;
      }
      this.authService.update(inputs)
      .subscribe((user: User) => {
        let navigationExtras: NavigationExtras = {
          queryParams: user
        }
        this.snackbar.open('Successfully updated user', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        if(err.status === 401)
          this.snackbar.open('Wrong password', '', {
            duration: 3000,
            panelClass: 'fail'
          });
        else {
          this.snackbar.open('Email already registered', '', {
            duration: 3000,
            panelClass: 'fail'
          });
        }
      });
    }
  }
}
