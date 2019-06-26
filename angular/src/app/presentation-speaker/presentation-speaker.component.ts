import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ENTER, COMMA} from "@angular/cdk/keycodes";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs/index";
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent, MatTableDataSource} from "@angular/material";
import {map, startWith} from 'rxjs/operators';
import {Presentation} from "../shared/presenation/presentation";
import {Speaker} from "../shared/speaker/speaker";
import {SpeakerService} from "../shared/speaker.service";

@Component({
  selector: 'app-presentation-speaker',
  templateUrl: './presentation-speaker.component.html',
  styleUrls: ['./presentation-speaker.component.scss']
})
export class PresentationSpeakerComponent {

  @Input() presentation: Presentation;
  speakers: Speaker[];
  private speakerForm = new FormControl();
  filteredSpeakers: Observable<Speaker[]>;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private speakerService: SpeakerService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));

    this.filteredSpeakers = this.speakerForm.valueChanges.pipe(
      startWith(null),
      map((speaker: string | null) => speaker ? this._filter(speaker) : this.speakers.slice())
    );

  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe((speakers) => {
        console.log("alle Speakers", speakers);
        this.speakers = speakers;
        console.log("speakers", this.speakers);
      })
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
