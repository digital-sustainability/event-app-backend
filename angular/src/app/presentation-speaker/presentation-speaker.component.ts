import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';
import {Presentation} from '../shared/presentation/presentation';
import {Speaker} from '../shared/speaker/speaker';
import {SpeakerService} from '../shared/speaker.service';
import {PresentationSpeakerService} from '../shared/presentation-speaker.service';

@Component({
  selector: 'app-presentation-speaker',
  templateUrl: './presentation-speaker.component.html',
  styleUrls: ['./presentation-speaker.component.scss']
})
export class PresentationSpeakerComponent {

  @Input() presentation: Presentation;
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
    private presentationSpeakerService: PresentationSpeakerService,
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
      this.presentationSpeakerService.deletePresentationSpeaker({
        presentation_id: this.presentation.id,
        speaker_id: speaker.id
      }).subscribe((presentationSpeaker) => {
        const index = this.presentation.speakers.indexOf(speaker);
        this.presentation.speakers.splice(index, 1);
        console.log('delete presentationspeaker', presentationSpeaker);
      });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.presentation.speakers.push(event.option.value);
    this.speakerInput.nativeElement.value = '';
    this.speakerForm.setValue(null);
    this.presentationSpeakerService.createPresentationSpeaker({
      id: undefined,
      presentation_id: this.presentation.id,
      speaker_id: event.option.value.id
    }).subscribe( (presentationSpeaker) => {
      console.log('new speakerpresentation', presentationSpeaker);
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
