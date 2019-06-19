import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Router} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {


  @Input() eventId;
  sessions: Session[];
  session: Session;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Session>;

  displayedColumns: string[] = ['id', 'title', 'abstract', 'label_presentations', 'event_id', 'details', 'update', 'delete'];

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
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


  getAllSessions() {
    this.sessionService.getSessions({
      event_id: this.eventId
    })
      .subscribe((sessions) => {
        this.sessions = sessions;
        console.log('sessions:', this.sessions);
        this.dataSource = new MatTableDataSource(this.sessions);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
        console.log("deleted", this.sessions)
      })
  }

}
