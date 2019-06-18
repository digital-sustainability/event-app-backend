import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  private sub: Subscription;
  private event_id: number;
  private event: Event;

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private router: Router,
              private snackbar: MatSnackBar) { }

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

  submit(formData) {
    let event = formData;
    event.id = this.event_id;
    this.eventService.updateEvent(event)
      .subscribe( (events) => {
        console.log("new", events);
        this.router.navigate(['event']);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Event konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
