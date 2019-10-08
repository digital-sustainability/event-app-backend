import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Session} from "../../shared/session/session";
import { MatSnackBar } from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {SessionService} from "../../shared/session.service";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.scss']
})
export class SessionEditComponent implements OnInit {

  private sub: Subscription;
  private session_id: number;
  session: Session;
  event: Event;

  constructor(private route: ActivatedRoute,
              private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar,
              private eventService: EventService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.session_id = params['session_id'];

      this.sessionService.getSessionById(this.session_id)
        .subscribe( (session) => {
          this.session = session;
          console.log(this.session);
        });
    });
    this.getEventAndSessionForRouting();
  }

  getEventAndSessionForRouting() {
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        })
      this.sessionService.getSessionById(params["session_id"])
        .subscribe( (session: any) => {
          this.session = session;
        })
    })
  }

  submit(formData) {
    let session = formData;
    session.id = this.session_id;
    session.event_id = session.event_id.id;
    this.sessionService.updateSession(session)
      .subscribe( (sessions) => {
        console.log("new", sessions);
        this.router.navigate(['../'], {
          relativeTo: this.route
        });
        this.snackbar.open('Session wurde erfolgreich geändert.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Session konnte nicht geändert werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
