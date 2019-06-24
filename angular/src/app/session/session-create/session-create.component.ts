import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../shared/session.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.scss']
})
export class SessionCreateComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  submit(formData: any) {
    this.sessionService.createSession(formData)
      .subscribe((sessions) => {
        console.log("new", sessions)
        this.router.navigate(['session']);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Session konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
