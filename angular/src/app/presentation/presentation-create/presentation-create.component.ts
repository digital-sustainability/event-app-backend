import { Component, OnInit } from '@angular/core';
import {PresentationService} from '../../shared/presentation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/event.service';
import {SessionService} from '../../shared/session.service';
import {Session} from '../../shared/session/session';
import {Event} from '../../shared/event/event';
import * as moment from 'moment';

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

  /**
   * Gets the Session and Event ID from the URL for the Navigation
   */
  getEventAndSessionForRouting() {
    this.route.params.subscribe( (params) => {
      if (params['session_id']) { // presentation belongs to a session
        this.sessionService.getSessionById(params['session_id'])
          .subscribe( (session: any) => {
            this.session = session;
          });
      }

      this.eventService.getEventById(params['event_id'])
        .subscribe( (event: any) => {
          this.event = event;
        });
    });
  }

  /**
   * Creates a new Presentation with the formData
   *
   * Opens a MatSnackBar to show if the Presentation was created successfully or failed
   *
   * Navigates to the Presentation List
   *
   * @param formData
   */
  submit(formData: any) {
    const newPresentation = formData;

    newPresentation.start = moment(newPresentation.start).format('YYYY-MM-DD HH:mm:ss');
    newPresentation.end = moment(newPresentation.end).format('YYYY-MM-DD HH:mm:ss');

    if (newPresentation.position === '') {
      newPresentation.position = 0;
    }

    this.presentationService.createPresentation(newPresentation)
      .subscribe((presentations) => {
        this.router.navigate(['../../'], {
          relativeTo: this.route
        });
        this.snackbar.open('Präsentation wurde erfolgreich erstellt.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Präsentation konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
