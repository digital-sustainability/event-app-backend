import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../shared/session.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.scss']
})
export class SessionCreateComponent implements OnInit {

  event: Event;

  constructor(private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar,
              private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        })
    })
  }

  submit(formData: any) {
    const newSession = formData;

    if(newSession.position == '') {
      newSession.position = 0;
    }


    this.sessionService.createSession(newSession)
      .subscribe((sessions) => {
        console.log("new", sessions)
        this.router.navigate(['./../../'], {
          relativeTo: this.route
        });
        this.snackbar.open('Session wurde erfolgreich erstellt.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Session konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
