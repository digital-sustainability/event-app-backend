import { Component, OnInit } from '@angular/core';
import {PresentationService} from "../../shared/presentation.service";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-presentation-create',
  templateUrl: './presentation-create.component.html',
  styleUrls: ['./presentation-create.component.scss']
})
export class PresentationCreateComponent implements OnInit {

  event: Event;
  session: Session;

  constructor(private presentationService: PresentationService,
              private router: Router,
              private snackbar: MatSnackBar,
              private route: ActivatedRoute,
              private eventService: EventService,
              private sessionService: SessionService) { }

  ngOnInit() {
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

  submit(formData: any) {
    this.presentationService.createPresentation(formData)
      .subscribe((presentations) => {
        console.log(presentations);
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
        this.snackbar.open('Präsentation wurde erfolgreich erstellt.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Präsentation konnte nich erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
