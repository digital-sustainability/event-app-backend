import {Component, OnDestroy, OnInit} from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {PresentationService} from "../../shared/presentation.service";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss']
})
export class PresentationDetailComponent implements OnInit, OnDestroy {

  presentation_id: number;
  presentation: Presentation;
  private sub: any;
  event: Event;
  session: Session;

  constructor(private presentationService: PresentationService,
              private route: ActivatedRoute,
              private eventService: EventService,
              private sessionService: SessionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.presentation_id = params['presentation_id'];
      this.presentationService.getPresenationById(this.presentation_id)
        .subscribe((presentation) => {
          this.presentation = presentation;
          console.log("dude", this.presentation);
        });
    });
    this.getEventAndSessionForRouting();
  }

  getEventAndSessionForRouting() {
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        })
      this.sessionService.getSessionById(params["session_id"])
        .subscribe( (session: any) => {
          this.session = session;
        })
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
