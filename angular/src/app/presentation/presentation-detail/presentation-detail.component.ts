import {Component, OnDestroy, OnInit} from '@angular/core';
import {Presentation} from '../../shared/presentation/presentation';
import {PresentationService} from '../../shared/presentation.service';
import {ActivatedRoute} from '@angular/router';
import {Session} from '../../shared/session/session';
import {Event} from '../../shared/event/event';

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss']
})
export class PresentationDetailComponent implements OnInit {

  presentation_id: number;
  presentation: Presentation;
  event: Event;
  session: Session;

  constructor(
    private presentationService: PresentationService,
    private route: ActivatedRoute
  ) {}

  /**
   * Gets the presentation by its ID
    */
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.presentation_id = params['presentation_id'];
      this.presentationService.getPresenationById(this.presentation_id, true)
        .subscribe((presentation) => {
          presentation.merged_abstract = presentation.formatted_abstract ? presentation.formatted_abstract : presentation.abstract;
          this.presentation = presentation;

          if (this.presentation.session_id) {
            // presentation belongs to a session
            this.session = this.presentation.session_id;
            this.event = this.presentation.session_id.event_id;
          } else {
            // presentation belongs to an event
            this.event = this.presentation.event_id;
          }
        });
    });
  }
}
