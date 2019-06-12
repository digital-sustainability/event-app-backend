import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../shared/event/event";
import {Router} from "@angular/router";
import {EventService} from "../../shared/event.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];
  event: Event;

  displayedColumns: string[] = ['id', 'title', 'description', 'start', 'end', 'location', 'image_path', 'published', 'details', 'update', 'delete'];

  id: number;

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getEvents()
      .subscribe((events) => {
        console.log("das", events);
        this.events = events;
      });
  }

  // todo: confirmation before deleting something
  deleteEventById(id) {
    this.eventService.deleteEvent(id)
      .subscribe((event) => {
        this.event = event;
        this.ngOnInit();
        console.log("deleted", this.events)
      })
  }



/*  goToDetailEvent(id) {
    this.router.navigate(['/event-detail', id])
  }*/



}
