import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from "../../shared/event.service";
import {ActivatedRoute} from "@angular/router";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  event_id: number;
  event: Event;
  private sub: any;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute) { }

  /**
   * Gets an Event by it's ID
   * Uses the EventService and the ActivatedRoute
    */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.event_id = params['event_id'];
      this.eventService.getEventById(this.event_id)
        .subscribe( (event) => {
          event.merged_description = event.formatted_description ? event.formatted_description : event.description;
          this.event = event;
        });
    });
  }

  /**
   * Unsubscribe from the Events
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
