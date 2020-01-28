import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Event } from '../../shared/event/event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {

  constructor(private eventService: EventService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {}

  /**
   * Writes the formData into the database
   * Opens a Snackbar for success and fail where it shows if the speaker was created
   * or there was an Error and the data could not be written in the database
   * @param formData
   *
   * uses the EventService, the Router and the MatSnackBar
   */
  submit(args: {formData: Event, quit: boolean}) {
    this.eventService.createEvent(args.formData)
      .subscribe((event: Event) => {
        if (args.quit) {
          this.router.navigate(['event']);
        } else {
          this.router.navigate(['/event/' + event.id + '/edit']);
        }
        this.snackbar.open('Event wurde erfolgreich erstellt', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Event konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
