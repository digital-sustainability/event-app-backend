import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Session} from "../../shared/session/session";
import {SessionService} from "../../shared/session.service";
import {EventService} from "../../shared/event.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.scss']
})
export class SessionDetailComponent implements OnInit, OnDestroy {

  session_id: number;
  session: Session;
  private sub: any;
  event: Event;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private eventService: EventService) {
  }

  /**
   *
   */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.session_id = params['session_id'];
      this.sessionService.getSessionById(this.session_id)
        .subscribe((session) => {
          session.merged_abstract = session.formatted_abstract ? session.formatted_abstract : session.abstract;
          this.session = session;
        });
    });
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        })
    })

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
