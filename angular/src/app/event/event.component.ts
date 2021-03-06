import { Component, OnInit, ViewChild } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import { AuthService} from "../shared/auth/auth.service";
import {EventService} from "../shared/event.service";
import { Event} from "../shared/event/event";
import DateTimeFormat = Intl.DateTimeFormat;
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  onCreateEvent() {
    const emptyEvent = <Event>{
      id: 1,
      title: 'NewEventToTestCrud',
      description: 'if it works, it would be great',
      start: '2019-05-09 09:00:00',
      end: '2019-05-09 09:00:00',
      location: '',
      image_path: '',
      url: '',
      url_label: '',
      published: false
    };
    this.eventService.createEvent(emptyEvent).subscribe((event: Event) => {
      console.log('huee');
    });
  }

  ngOnInit() {
    this.getAllEvents();
    //this.createNewEvent();
  }


  getAllEvents() {
    this.eventService.getEvents()
      .subscribe((events) => {
        console.log("das", events);
        this.events = events;
      });
  }






}
