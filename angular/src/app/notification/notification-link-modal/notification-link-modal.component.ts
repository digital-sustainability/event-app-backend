import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSelectChange } from '@angular/material';
import { TopicModalComponent } from 'src/app/topic/topic-modal/topic-modal.component';
import { SessionService } from 'src/app/shared/session.service';
import { EventService } from 'src/app/shared/event.service';
import { PresentationService } from 'src/app/shared/presentation.service';
import { SpeakerService } from 'src/app/shared/speaker.service';
import { Event } from 'src/app/shared/event/event';
import { Session } from 'src/app/shared/session/session';
import { Presentation } from 'src/app/shared/presenation/presentation';
import { Speaker } from 'src/app/shared/speaker/speaker';
import { zip, forkJoin } from 'rxjs';

@Component({
  selector: 'app-notification-link-modal',
  templateUrl: './notification-link-modal.component.html',
  styleUrls: ['./notification-link-modal.component.scss']
})
export class NotificationLinkModalComponent implements OnInit {
  redirect: boolean;
  redirectTo: string;
  redirectId: number;

  events: Event[];
  sessions: Session[];
  sessionsOfEvent: {[key: number]: Session[]} = {};
  presentations: Presentation[];
  presentationsOfEvent: {[key: number]: Presentation[]} = {};
  speakers: Speaker[];

  selectedEventId: number;
  selectedSessionId: number;
  selectedPresentationId: number;
  selectedSpeakerId: number;

  loading: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<NotificationLinkModalComponent>,
    private _eventService: EventService,
    private _sessionService: SessionService,
    private _presentationService: PresentationService,
    private _speakerService: SpeakerService
  ) {
    this.redirect = data.redirect;
    this.redirectTo = data.redirectTo;
    this.redirectId = data.redirectId;
  }

  ngOnInit() {
    this.loading = true;

    forkJoin([
      this._eventService.getEvents(),
      this._sessionService.getSessions(),
      this._presentationService.getPresentations(),
      this._speakerService.getSpeakers()
    ]).subscribe({next: (array) => {
      this.events = array[0].sort(function(a: Event, b: Event) {
        if (a.start < b.start) { return 1; }
        if (a.start > b.start) { return -1; }

        return 0;
      });
      this.sessions = array[1].sort(function(a: Session, b: Session) {
        const valueA = a.position;
        const idA = a.id;
        const valueB = b.position;
        const idB = b.id;

        let comparatorResult = 0;
        if (valueA !== 0 && valueB !== 0) {
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          } else {
            if (idA > idB) {
              comparatorResult = 1;
            } else if (idA < idB) {
              comparatorResult = -1;
            }
          }
        } else if (valueA !== 0) {
          comparatorResult = -1;
        } else if (valueB !== 0) {
          comparatorResult = 1;
        } else {
          if (idA > idB) {
            comparatorResult = 1;
          } else if (idA < idB) {
            comparatorResult = -1;
          }
        }
        return comparatorResult;
      });
      this.presentations = array[2].sort(function(a: Presentation, b: Presentation) {
        const valueA = a.position;
        const idA = a.id;
        const valueB = b.position;
        const idB = b.id;

        let comparatorResult = 0;
        if (valueA !== 0 && valueB !== 0) {
          if (valueA > valueB) {
            comparatorResult = 1;
          } else if (valueA < valueB) {
            comparatorResult = -1;
          } else {
            if (idA > idB) {
              comparatorResult = 1;
            } else if (idA < idB) {
              comparatorResult = -1;
            }
          }
        } else if (valueA !== 0) {
          comparatorResult = -1;
        } else if (valueB !== 0) {
          comparatorResult = 1;
        } else {
          if (idA > idB) {
            comparatorResult = 1;
          } else if (idA < idB) {
            comparatorResult = -1;
          }
        }
        return comparatorResult;
      });
      this.speakers = array[3].sort(function(a: Speaker, b: Speaker) {
        if (a.first_name < b.first_name) { return -1; }
        if (a.first_name > b.first_name) { return 1; }
        // same first name -> sort last name
        if (a.last_name < b.last_name) { return -1; }
        if (a.last_name > b.last_name) { return 1; }
        return 0;
      });

      this.calculatePresentationsOfEvent();
      this.calculateSessionsOfEvent();

      this.loading = false;
    }, error: () => {}});
  }

  calculateSessionsOfEvent() {
    this.events.forEach((event: Event) => {
      this.sessionsOfEvent[event.id] = this.sessions.filter((session: Session) => session.event_id.id === event.id);
    });
  }

  calculatePresentationsOfEvent() {
    this.events.forEach((event: Event) => {
      this.presentationsOfEvent[event.id] =
        this.presentations.filter((presentation: Presentation) => presentation.session_id.event_id === event.id);
    });
  }

  onEventSelectChange(data: MatSelectChange) {
    this.redirectTo = 'event';
    this.redirectId = data.value;

    this.selectedSessionId = undefined;
    this.selectedPresentationId = undefined;
    this.selectedSpeakerId = undefined;
  }

  onSessionSelectChange(data: MatSelectChange) {
    this.redirectTo = 'session';
    this.redirectId = data.value;

    this.selectedEventId = undefined;
    this.selectedPresentationId = undefined;
    this.selectedSpeakerId = undefined;
  }

  onPresentationSelectChange(data: MatSelectChange) {
    this.redirectTo = 'presentation';
    this.redirectId = data.value;

    this.selectedEventId = undefined;
    this.selectedSessionId = undefined;
    this.selectedSpeakerId = undefined;
  }

  onSpeakerSelectChange(data: MatSelectChange) {
    this.redirectTo = 'speaker';
    this.redirectId = data.value;

    this.selectedEventId = undefined;
    this.selectedSessionId = undefined;
    this.selectedPresentationId = undefined;
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDelete() {
    this.dialogRef.close({redirect: false});
  }

  onSave() {
    this.dialogRef.close({redirect: true, redirectTo: this.redirectTo, redirectId: this.redirectId});
  }
}
