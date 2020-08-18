import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges} from '@angular/core';
import {Presentation} from '../../shared/presentation/presentation';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import * as moment from 'node_modules/moment';

@Component({
  selector: 'app-presenation-form',
  templateUrl: './presenation-form.component.html',
  styleUrls: ['./presenation-form.component.scss']
})
export class PresenationFormComponent implements OnInit, OnChanges {

  @Output() presentationSubmit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() buttonTitle: string;

  @Input() presentation: Presentation;

  presentationForm: FormGroup;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '150',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [],
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['fontSize', 'backgroundColor'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
      ['insertOrderedList', 'insertHorizontalRule'],
      ['fontName'],
      ['insertImage', 'insertVideo']
    ]
  };

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
      'formatted_abstract': new FormControl('', [

      ]),
      'start': new FormControl('', [
        Validators.required,
      ]),
      'end': new FormControl('', [
        Validators.required
      ]),
      'slides': new FormControl('', [
      ]),
      'access_token': new FormControl('', [
      ]),
      'position': new FormControl('', [
      ]),
      'room': new FormControl('', [
      ]),
      'session_id': new FormControl(),
      'event_id': new FormControl()
    });

    this.route.params.subscribe( (params) => {
      if (params['session_id']) {
        this.presentationForm.patchValue({
          session_id: params['session_id']
        }); // presentation belongs to a session
      } else {
        this.presentationForm.patchValue({
          event_id: params['event_id']
        }); // presentation belongs to an event
      }
    });
  }

  /**
   * Gets the Elements for the PresentationEdit Component
   */
  initInputs() {
    this.presentationForm.get('title').setValue(this.presentation.title);
    this.presentationForm.get('abstract').setValue(this.presentation.abstract);
    this.presentationForm.get('formatted_abstract').setValue(this.presentation.formatted_abstract);
    // remove the wrong Z for UTC at the end:
    const start = new Date(this.presentation.start.substring(0, this.presentation.start.length - 1));
    // start.setTime(start.getTime() - 1 * 60 * 60 * 1000);
    const end = new Date(this.presentation.end.substring(0, this.presentation.end.length - 1));
    // end.setTime(end.getTime() - 1 * 60 * 60 * 1000);
    this.presentationForm.get('start').setValue(start);
    this.presentationForm.get('end').setValue(end);
    this.presentationForm.get('slides').setValue(this.presentation.slides);
    this.presentationForm.get('access_token').setValue(this.presentation.access_token);
    if (this.presentation.position !== 0) {
      this.presentationForm.get('position').setValue(this.presentation.position);
    }
    this.presentationForm.get('room').setValue(this.presentation.room);

    if (this.presentation.session_id) { // belongs to a session
      this.presentationForm.get('session_id').setValue(this.presentation.session_id.id);
    } else if (this.presentation.event_id) { // belongs to an event
      this.presentationForm.get('event_id').setValue(this.presentation.event_id.id);
    }
  }

  /**
   * Changes the Values of the Form if the Presentation changes
   *
   * @param {SimpleChanges} changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.presentation && changes.presentation.currentValue &&
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
    if (this.presentationForm.invalid) {
      return false;
    } else {
      this.presentationSubmit.emit(this.presentationForm.value);
    }
  }
}
