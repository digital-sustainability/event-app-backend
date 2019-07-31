import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Event} from "../../shared/event/event";
import {Router} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnChanges {
  events: Event[];
  event: Event;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Event>;

  event_id: number;

  displayedColumns: string[] = ['id', 'title', 'description', 'start', 'end', 'location', 'image_path', 'published', 'details', 'update', 'delete'];

  id: number;

  constructor(private router: Router,
              private eventService: EventService,
              private snackbar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllEvents();
  }

  ngOnChanges() {
    this.getAllEvents();
  }

  /**
   * Filters the Events
   * Ignores higher case letters
   *
   * @param {string} filterValue
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Get all the Events that exists
   *
   * Uses the EventService and creates the MatTableDataSource
   * for the table view
   */
  getAllEvents() {
    this.eventService.getEvents()
      .subscribe((events) => {
        console.log("das", events);
        this.events = events;
        this.dataSource = new MatTableDataSource(this.events);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  /**
   * Deletes the Event if someone clicks on delete and presses
   * yes on the Dialog
   *
   * Opens a Snackbar that shows if the Event has been deleted successfully or
   * there was an error
   *
   * @param id
   */
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

  /**
   * Opens a dialog to check if the user is sure to delete this Event
   *
   * @param {Event} event
   */
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