import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {config} from "rxjs/index";

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {

  sessions: Session[];

  sessionForm: FormGroup;

  constructor(private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.sessionForm = new FormGroup( {
      'title': new FormControl('', [
        Validators.required
      ]),
      'abstract': new FormControl('', [
        Validators.required
      ]),
      'label_presentation': new FormControl('', [
        Validators.required
      ]),
      'event_id': new FormControl('', [
        Validators.required
      ])
    });
  }

  onSubmit():boolean {
    if(this.sessionForm.invalid) {
      return false;
    } else {
      this.sessionService.createSession(this.sessionForm.value)
        .subscribe( (sessions) => {
          console.log('new', sessions);
          this.router.navigate(['/event/event-detail']);
        }, (err) => {
          console.log('Error', err);
          this.snackbar.open('Session konnte nicht erstellt werden. Überprüfe alle Felder.', '',{
            duration: 3000,
            panelClass: 'fail'
          });
        });
    }
  }

}
