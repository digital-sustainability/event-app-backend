import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
import {Session} from '../shared/session/session';
import {Speaker} from '../shared/speaker/speaker';
import {SpeakerService} from '../shared/speaker.service';
import {SessionSpeakerService} from '../shared/session-speaker.service';

@Component({
  selector: 'app-session-speaker',
  templateUrl: './session-speaker.component.html',
  styleUrls: ['./session-speaker.component.scss']
})
export class SessionSpeakerComponent {

  @Input() session: Session;
  speakers: Speaker[] = [];
  speakerForm = new FormControl();
  filteredSpeakers: Observable<Speaker[] | string[]>;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('speakerInput', { static: true }) speakerInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;

  constructor(
    private speakerService: SpeakerService,
    private sessionSpeakerService: SessionSpeakerService,
  ) {
    this.getAllSpeakers();
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe((speakers) => {
        this.filteredSpeakers = this.speakerForm.valueChanges.pipe(
          startWith(null),
          map((value: string | null) => value ? this._filter(speakers, value) : speakers.slice())
        );
      });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.speakerForm.setValue(null);
    }
  }

  remove(speaker: Speaker): void {
      this.sessionSpeakerService.deleteSessionSpeaker({
        session_id: this.session.id,
        speaker_id: speaker.id
      }).subscribe((sessionSpeaker) => {
        const index = this.session.speakers.indexOf(speaker);
        this.session.speakers.splice(index, 1);
        console.log('delete sessionspeaker', sessionSpeaker);
      });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.session.speakers.push(event.option.value);
    this.speakerInput.nativeElement.value = '';
    this.speakerForm.setValue(null);
    this.sessionSpeakerService.createSessionSpeaker({
      id: undefined,
      session_id: this.session.id,
      speaker_id: event.option.value.id
    }).subscribe( (sessionSpeaker) => {
      console.log('new speakersession', sessionSpeaker);
    });
  }

  private _filter(speakers: Speaker[], value: any): Speaker[] {
    if (!value.toLowerCase) {
      return [value];
    }
    const filterValue = (<string>value).toLowerCase();
    return speakers.filter(speaker => {
      const concat = speaker.first_name + ' ' + speaker.last_name + ' ' + (speaker.organization ? speaker.organization : '');
      return concat.toLowerCase().includes(filterValue);
    });
  }
}
