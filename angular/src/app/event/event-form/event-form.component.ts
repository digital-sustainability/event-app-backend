import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  eventForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.eventForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [
        Validators.required
      ]),
      'start': new FormControl('', [
        Validators.required,
      ]),
      'end': new FormControl('', [
        Validators.required
      ]),
      'location': new FormControl('', [
        Validators.required
      ]),
      'image_path': new FormControl('', [
        Validators.required
      ]),
      'url': new FormControl('', [
        Validators.required,
      ]),
      'url_label': new FormControl('', [
        Validators.required,
      ]),
      'published': new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onSubmit() {};

}
