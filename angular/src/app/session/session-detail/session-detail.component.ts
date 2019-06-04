import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Session} from "../../shared/session/session";
import {SessionService} from "../../shared/session.service";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit {

  session_id: number;
  session: Session;
  private sub: any;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.session_id = params['id'];
      this.sessionService.getSessionById(this.session_id)
        .subscribe((session) => {
          this.session = session;
          console.log(this.session);
        });
    });

  }
}
