import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {ActivatedRoute, Router} from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {


  @Input() eventId;
  sessions: Session[];
  session: Session;
  event: Event;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<Session>;

  displayedColumns: string[] = ['id', 'title', 'abstract', 'label_presentations', 'event_id', 'actions'];

  constructor(private sessionService: SessionService,
              private router: Router,
              private snackbar: MatSnackBar,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private eventService: EventService) { }

  ngOnInit() {
    this.getEventForRouting();
  }

  ngAfterViewInit(): void {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getAllSessions() {
    this.sessionService.getSessions({
      event_id: this.eventId
    })
      .subscribe((sessions) => {
        this.sessions = sessions;
        this.sessions.forEach((session) => {
          session.merged_abstract = session.formatted_abstract ? session.formatted_abstract : session.abstract;
        })
        this.dataSource = new MatTableDataSource(this.sessions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  getEventForRouting() {
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.eventId && changes.eventId.currentValue !== changes.eventId.previousValue) {
      this.getAllSessions();
    }
  }

  // todo: confirmation before deleting something
  deleteSessionById(id) {
    this.sessionService.deleteSession(id)
      .subscribe((session) => {
        this.session = session;
        this.ngOnInit();
        console.log("deleted", this.sessions);
        this.getAllSessions();
        this.snackbar.open('Session erfolgreich gelöscht.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        this.snackbar.open('Session konnte nicht gelöscht werden.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

  openDeleteDialog(session: Session) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {title: `${session.title}`}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteSessionById(session.id);
      }
    });
  }

}
