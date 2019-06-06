import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Router} from "@angular/router";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit, OnChanges {


  @Input() eventId;
  sessions: Session[];

  displayedColumns: string[] = ['id', 'title', 'abstract', 'label_presentations', 'event_id'];

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
  }


  getAllSessions() {
    this.sessionService.getSessions({
      event_id: this.eventId
    })
      .subscribe((sessions) => {
        this.sessions = sessions;
        console.log('sessions:', this.sessions);
      })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.eventId && changes.eventId.currentValue !== changes.eventId.previousValue) {
      this.getAllSessions();
    }

  }

}
