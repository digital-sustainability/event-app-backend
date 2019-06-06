import { Component, OnInit, ViewChild } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { AuthService} from "../shared/auth/auth.service";
import {EventService} from "../shared/event.service";
import { Event} from "../shared/event/event";
import DateTimeFormat = Intl.DateTimeFormat;
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Observable} from "rxjs/index";

/*comment for timestamp*/
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event1: Event;

  events: Event[];

  displayedColums: string[] = [
    'Id',
    'Titel',
    'Beschreibung',
    'Start',
    'Ende',
    'Ort',
    'Bildlink',
    'URL',
    'URL-Label',
    'Publiziert'
  ];

  newEvent = {
    id: 12,
    title: "NewEventToTestCrud",
    description: "if it works, it would be great",
    start: "2019-05-09 09:00:00",
    end: "2019-05-09 09:00:00",
    location: "Bern",
    image_path: "whatever",
    url: "nothiung",
    url_label: "nothing",
    published: false
};

  constructor(private router: Router,
              private authService: AuthService,
              private eventService: EventService
  ) { }

  ngOnInit() {
    this.getAllEvents();
    this.getAnEventById();
    //this.createNewEvent();
  }

  getAnEventById() {
    this.eventService.getEventById(1)
      .subscribe((event) => {
        console.log("des", event);
        this.event1 = event;
        this.updateEvent();
      });
  }


  getAllEvents() {
    this.eventService.getEvents()
      .subscribe((events) => {
        console.log("das", events);
        this.events = events;
      });
  }

  updateEvent() {
    this.event1.title = "Geile Event";
    this.eventService.updateEvent(this.event1)
      .subscribe((event) => {
        console.log("updated event", event);
        console.log("updated event", this.event1);
      });
  }

  deleteEvent() {
    this.eventService.deleteEvent(12)
      .subscribe((event) => {

      });
  }






}
