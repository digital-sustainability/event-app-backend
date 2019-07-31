import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Speaker} from "../../shared/speaker/speaker";

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  @Output() speakerSubmit: EventEmitter<Speaker> = new EventEmitter<Speaker>();
  @Input() speaker: Speaker;
  @Input() buttonTitle: string;

  speakerForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.speakerForm = new FormGroup({
      'first_name': new FormControl('', [
        Validators.required
      ]),
      'last_name': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
      ]),
      'position': new FormControl('', [
        Validators.required
      ]),
      'organization': new FormControl('', [
        Validators.required
      ]),
      'short_bio': new FormControl('', [
        Validators.required
      ]),
      'photo_url': new FormControl('', [
        Validators.required
      ]),
    });
  }


  initInputs() {
    this.speakerForm.get('first_name').setValue(this.speaker.first_name);
    this.speakerForm.get('last_name').setValue(this.speaker.last_name);
    this.speakerForm.get('email').setValue(this.speaker.email);
    this.speakerForm.get('position').setValue(this.speaker.position);
    this.speakerForm.get('organization').setValue(this.speaker.organization);
    this.speakerForm.get('short_bio').setValue(this.speaker.short_bio);
    this.speakerForm.get('photo_url').setValue(this.speaker.photo_url);


  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.speaker && changes.speaker.currentValue &&
      changes.speaker.previousValue !== changes.speaker.currentValue) {
      this.initInputs();
    }
  }


  onSubmit() {
    if(this.speakerForm.invalid) {
      return false;
    } else {
      this.speakerSubmit.emit(this.speakerForm.value);
    }
  }


}
