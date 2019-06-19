import {Component, Input, OnInit, ViewChild} from '@angular/core';
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
export class EventListComponent implements OnInit {
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

  ngAfterViewInit(): void {
    // todo: check why paginator and sort is not working
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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
