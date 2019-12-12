import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-presenation-form',
  templateUrl: './presenation-form.component.html',
  styleUrls: ['./presenation-form.component.scss']
})
export class PresenationFormComponent implements OnInit {

  @Output() presentationSubmit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() buttonTitle: string;

  @Input() presentation: Presentation;

  presentationForm: FormGroup;

  constructor(private route: ActivatedRoute
  ) { }

  /**
   * Generates the FormGroup with its validations
   *
   * Gets the session ID from the URL
   */
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

    this.route.params.subscribe( (params) => {
      this.presentationForm.patchValue({
        session_id: params["session_id"]
      });
    });
  }

  /**
   * Gets the Elements for the PresentationEdit Component
   */
  initInputs() {
    this.presentationForm.get('title').setValue(this.presentation.title);
    this.presentationForm.get('abstract').setValue(this.presentation.abstract);
    const start = new Date(this.presentation.start);
    start.setTime( start.getTime() + start.getTimezoneOffset() * 60 * 1000 );
    const end = new Date(this.presentation.end);
    end.setTime( end.getTime() + end.getTimezoneOffset() * 60 * 1000 );
    this.presentationForm.get('start').setValue(start);
    this.presentationForm.get('end').setValue(end);
    this.presentationForm.get('slides').setValue(this.presentation.slides);
    this.presentationForm.get('access_token').setValue(this.presentation.access_token);
    this.presentationForm.get('room').setValue(this.presentation.room);
    this.presentationForm.get('session_id').setValue(this.presentation.session_id);
  }

  /**
   * Changes the Values of the Form if the Presentation changes
   *
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.presentation && changes.presentation.currentValue &&
      changes.presentation.previousValue !== changes.presentation.currentValue) {
      this.initInputs();
    }
  }

  /**
   * Submits the data if the Form is valid
   *
   * @returns {boolean}
   */
  onSubmit() {
    if(this.presentationForm.invalid) {
      return false;
    } else {
      this.presentationSubmit.emit(this.presentationForm.value);
    }
  }
}
