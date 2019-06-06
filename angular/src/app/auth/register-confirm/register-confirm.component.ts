import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register-confirm',
  templateUrl: './register-confirm.component.html',
  styleUrls: ['./register-confirm.component.scss']
})
export class RegisterConfirmComponent implements OnInit {

  confirmSuccess: boolean;
  loading: boolean;

  constructor(private route: ActivatedRoute,
    private authService: AuthService,
    private snackbar: MatSnackBar) {
      this.loading = true;
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.authService.confirm(params)
      .subscribe((res) => {
        this.confirmSuccess = true;
        this.loading = false;
      }, (err) => {
        this.confirmSuccess = false;
        this.loading = false;
      });
    });
  }

}
