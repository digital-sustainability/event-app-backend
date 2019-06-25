import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Presentation} from "../../shared/presenation/presentation";
import {ActivatedRoute, Router} from "@angular/router";
import {PresentationService} from "../../shared/presentation.service";
import {MatSnackBar} from "@angular/material";
import {EventService} from "../../shared/event.service";
import {SessionService} from "../../shared/session.service";
import {Event} from "../../shared/event/event";
import {Session} from "../../shared/session/session";

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './presentation-edit.component.html',
  styleUrls: ['./presentation-edit.component.scss']
})
export class PresentationEditComponent implements OnInit {

  private sub: Subscription;
  private presentation_id: number;
  private presentation: Presentation;
  event: Event;
  session:Session;

  constructor(private route: ActivatedRoute,
              private presentationService: PresentationService,
              private router: Router,
              private snackbar: MatSnackBar,
              private eventService: EventService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.presentation_id = params['presentation_id'];

      this.presentationService.getPresenationById(this.presentation_id)
        .subscribe( (presentation) => {
          this.presentation = presentation;
          console.log(this.presentation);
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
    let presentation = formData;
    presentation.id = this.presentation_id;
    presentation.session_id = presentation.session_id.id;
    this.presentationService.updatePresentation(presentation)
      .subscribe( (presentations) => {
        console.log("new", presentations);
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
        this.snackbar.open('Präsentation wurde erfolgreich geändert.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Präsentation konnte nicht geändert werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
