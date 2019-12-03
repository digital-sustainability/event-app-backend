import {Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {Event} from "../../shared/event/event";
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnChanges {


  @Output() eventSubmit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() event: Event;
  @Input() buttonTitle: string;

  eventForm: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
      toolbarHiddenButtons: [
      ['fontName'],
      ['link', 'unlink', 'insertImage', 'insertVideo']
    ]
  };

  constructor() { }

  /**
   * Creates the form with its validations
   */
  ngOnInit() {
    this.eventForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [
        Validators.required
      ]),
      'formatted_description': new FormControl('', [
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

      ]),
    });
  }

  /**
   * Gets the Inputs for the Form for Edit
   */
  initInputs() {
    this.eventForm.get('title').setValue(this.event.title);
    this.eventForm.get('description').setValue(this.event.description);
    this.eventForm.get('formatted_description').setValue(this.event.formatted_description);
    this.eventForm.get('start').setValue(this.event.start);
    this.eventForm.get('end').setValue(this.event.end);
    this.eventForm.get('location').setValue(this.event.location);
    this.eventForm.get('image_path').setValue(this.event.image_path);
    this.eventForm.get('url').setValue(this.event.url);
    this.eventForm.get('url_label').setValue(this.event.url_label);
    this.eventForm.get('published').setValue(this.event.published);
  }

  /**
   * If the Event is not the same anymore then update the values of the Form
   *
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.event && changes.event.currentValue &&
      changes.event.previousValue !== changes.event.currentValue) {
      this.initInputs();
    }
  }

  /**
   * Checks if the EventForm is valid or not
   * Submit the data if the EventForm is valid
   *
   * @returns {boolean}
   */
  onSubmit() {
    if(this.eventForm.invalid) {
      return false;
    } else {
      this.eventSubmit.emit(this.eventForm.value);
    }
  }

}
