import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Session} from "../../shared/session/session";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../shared/session.service";

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss']
})
export class SessionEditComponent implements OnInit {

  private sub: Subscription;
  private session_id: number;
  private session: Session;

  constructor(private route: ActivatedRoute,
              private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.session_id = params['session_id'];

      this.sessionService.getSessionById(this.session_id)
        .subscribe( (session) => {
          this.session = session;
          console.log(this.session);
        });
    });

  }

  submit(formData) {
    let session = formData;
    session.id = this.session_id;
    this.sessionService.updateSession(session)
      .subscribe( (sessions) => {
        console.log("new", sessions);
        this.router.navigate(['../']);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Session konnte nicht geändert werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
