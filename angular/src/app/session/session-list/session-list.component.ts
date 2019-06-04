import { Component, OnInit } from '@angular/core';
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Router} from "@angular/router";

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  sessions: Session[];

  displayedColumns: string[] = ['id', 'title', 'abstract', 'label_presentation', 'event_id'];

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
    this.getAllSessions();
  }

  getAllSessions() {
    this.sessionService.getSessions()
      .subscribe((sessions) => {
        this.sessions = sessions;
        console.log('sessions:', this.sessions);
      })
  }

}
