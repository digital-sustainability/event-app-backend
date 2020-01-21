import {Component, OnDestroy, OnInit} from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {PresentationService} from "../../shared/presentation.service";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../shared/event.service";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Event} from "../../shared/event/event";

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

  /**
   * Gets the presentation by its ID
    */
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.presentation_id = params['presentation_id'];
      this.presentationService.getPresenationById(this.presentation_id)
        .subscribe((presentation) => {
          presentation.merged_abstract = presentation.formatted_abstract ? presentation.formatted_abstract : presentation.abstract;
          this.presentation = presentation;
        });
    });
    this.getEventAndSessionForRouting();
  };

  /**
   * Gets the Event and Session ID from the URL for the Navigation
   */
  getEventAndSessionForRouting() {
    this.route.params.subscribe( (params) => {
      this.eventService.getEventById(params["event_id"])
        .subscribe( (event: any) => {
          this.event = event;
        });
      this.sessionService.getSessionById(params["session_id"])
        .subscribe( (session: any) => {
          this.session = session;
        });
    });
  };

  /**
   * Unsubscribe from the presentation
   */
  ngOnDestroy() {
    this.sub.unsubscribe();
  };
}
