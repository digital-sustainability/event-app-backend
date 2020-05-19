import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Presentation} from "../../shared/presenation/presentation";
import {ActivatedRoute, Router} from "@angular/router";
import {PresentationService} from "../../shared/presentation.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import {EventService} from "../../shared/event.service";
import {SessionService} from "../../shared/session.service";
import {Event} from "../../shared/event/event";
import {Session} from "../../shared/session/session";
import * as moment from 'moment';

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './presentation-edit.component.html',
  styleUrls: ['./presentation-edit.component.scss']
})
export class PresentationEditComponent implements OnInit {

  private sub: Subscription;
  private presentation_id: number;
  presentation: Presentation;
  event: Event;
  session:Session;

  constructor(private route: ActivatedRoute,
              private presentationService: PresentationService,
              private router: Router,
              private snackbar: MatSnackBar,
              private eventService: EventService,
              private sessionService: SessionService) { }

  /**
   * Gets the presentation by its ID
   *
   * Uses Presentation Service
    */
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

  /**
   * Get the Event and Session ID from the URL for the Navigation
   *
   * Uses Event and Session Service
   */
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

  /**
   * Writes the Data of the selected Presentation in the Form and tracks changes
   *
   * Updates the data when submitted
   *
   * Opens a MatSnackBar to show if the Presentation was changed successfully or the editing failed
   *
   * Uses presentationService, Router
   * @param formData
   */
  submit(formData) {
    let presentation = this.preparePresentation(formData);
    this.presentationService.updatePresentation(presentation)
      .subscribe( (presentation) => {
        this.successCallback(presentation);
      }, (err) => {
        this.errorCallback(err);
      });
  }

  preparePresentation(formData) {
    const presentation = formData;
    presentation.id = this.presentation_id;
    presentation.session_id = presentation.session_id.id;

    presentation.start = moment(presentation.start).format('YYYY-MM-DD HH:mm:ss');
    presentation.end = moment(presentation.end).format('YYYY-MM-DD HH:mm:ss');
    
    if (presentation.position == '') {
      presentation.position = 0;
    }

    return presentation;
  }

  successCallback(presentation) {
    console.log("new", presentation);
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
    this.snackbar.open('Präsentation wurde erfolgreich geändert.', '', {
      duration: 3000,
      panelClass: 'success'
    });
  }

  errorCallback(err) {
    console.log('Error', err);
    this.snackbar.open('Präsentation konnte nicht geändert werden. Überprüfe alle Felder.', '', {
      duration: 3000,
      panelClass: 'fail'
    });
  }


}
