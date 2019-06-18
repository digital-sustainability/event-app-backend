import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../shared/event/event";
import {Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {Speaker} from "../../shared/speaker/speaker";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";
import {MatDialog, MatSnackBar} from "@angular/material";

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
              private eventService: EventService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) { }

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
  private deleteEventById(id) {
    this.eventService.deleteEvent(id)
      .subscribe((event) => {
        this.event = event;
        this.ngOnInit();
        console.log("deleted", this.events);
        this.snackbar.open('Event erfolgreich gelöscht.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        this.snackbar.open('Event konnte nicht gelöscht werden.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

  openDeleteDialog(event: Event) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {title: `${event.title}`}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteEventById(event.id);
      }
    });
  }




}
