import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as moment from 'moment';


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  private sub: Subscription;
  private event_id: number;
  event: Event;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  /**
   * Gets an Event by its ID
   *
   * Uses EventService and ActivatedRoute
    */
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.event_id = params['event_id'];

      this.eventService.getEventById(this.event_id)
        .subscribe( (event) => {
          this.event = event;
          console.log(this.event);
        });
    });

  }

  /**
   * Writes the elements of the chosen Event in the Event Form
   * Updates the Event when the Form is changed
   * Opens a Snackbar that shows if the Event could be changed successfully or the editing failed
   *
   * Uses the EventService, the MatSnackBar and the Router
   *
   * @param formData
   */
  submit(formData) {
    let event = formData;

    event.id = this.event_id;

    event.start = moment(event.start).format('YYYY-MM-DDTHH:mm:ss'); // don't use UTC in database
    event.end = moment(event.end).format('YYYY-MM-DDTHH:mm:ss'); // don't use UTC in database

    this.eventService.updateEvent(event)
      .subscribe( (events) => {
        console.log("new", events);
        this.router.navigate(['event']);
        this.snackbar.open('Event wurde erfolgreich geändert.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Event konnte nicht geändert werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
