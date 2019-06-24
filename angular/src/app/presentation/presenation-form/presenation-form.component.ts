import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-presenation-form',
  templateUrl: './presenation-form.component.html',
  styleUrls: ['./presenation-form.component.scss']
})
export class PresenationFormComponent implements OnInit {

  @Output() submit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() buttonTitle: string;

  @Input() presentation: Presentation;

  presentationForm: FormGroup;

  constructor(
  ) { }

  ngOnInit() {
    this.presentationForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'abstract': new FormControl('', [
        Validators.required
      ]),
      'start': new FormControl('', [
        Validators.required,
      ]),
      'end': new FormControl('', [
        Validators.required
      ]),
      'slides': new FormControl('', [
        Validators.required
      ]),
      'access_token': new FormControl('', [
        Validators.required
      ]),
      'room': new FormControl('', [
        Validators.required,
      ]),
      'session_id': new FormControl('', [
        Validators.required
      ])
    });
  }

  initInputs() {
    this.presentationForm.get('title').setValue(this.presentation.title);
    this.presentationForm.get('abstract').setValue(this.presentation.abstract);
    this.presentationForm.get('start').setValue(this.presentation.start);
    this.presentationForm.get('end').setValue(this.presentation.end);
    this.presentationForm.get('slides').setValue(this.presentation.slides);
    this.presentationForm.get('access_token').setValue(this.presentation.access_token);
    this.presentationForm.get('room').setValue(this.presentation.room);
    this.presentationForm.get('session_id').setValue(this.presentation.session_id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.presentation && changes.presentation.currentValue &&
      changes.presentation.previousValue !== changes.presentation.currentValue) {
      this.initInputs();
    }
  }

  onSubmit() {
    if(this.presentationForm.invalid) {
      return false;
    } else {
      this.submit.emit(this.presentationForm.value);
    }
  }
}
