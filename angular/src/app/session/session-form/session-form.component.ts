import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {ActivatedRoute, Router} from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import {config} from "rxjs/index";
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit, OnChanges {

  @Output() sessionSubmit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() session: Session;
  @Input() buttonTitle: string;

  sessions: Session[];

  sessionForm: FormGroup;

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sessionForm = new FormGroup( {
      'title': new FormControl('', [
        Validators.required
      ]),
      'abstract': new FormControl('', [
        Validators.required
      ]),
      'formatted_abstract': new FormControl('', [

      ]),
      'label_presentations': new FormControl('', [
      ]),
      'position': new FormControl('', [
      ]),
      'room': new FormControl('', [
      ]),
      'video_conferencing_link': new FormControl('', []),
      'video_conferencing_label': new FormControl('', []),
      'event_id': new FormControl('', [
        Validators.required
      ])
    });

    this.route.params.subscribe( (params) => {
      this.sessionForm.patchValue({
        event_id: params["event_id"]
      });
    });
  }

  initInputs() {
    this.sessionForm.get('title').setValue(this.session.title);
    this.sessionForm.get('abstract').setValue(this.session.abstract);
    this.sessionForm.get('formatted_abstract').setValue(this.session.formatted_abstract);
    this.sessionForm.get('label_presentations').setValue(this.session.label_presentations);
    if (this.session.position != 0) {
      this.sessionForm.get('position').setValue(this.session.position);
    }
    this.sessionForm.get('event_id').setValue(this.session.event_id);
    this.sessionForm.get('room').setValue(this.session.room);
    this.sessionForm.get('video_conferencing_link').setValue(this.session.video_conferencing_link);
    this.sessionForm.get('video_conferencing_label').setValue(this.session.video_conferencing_label);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.session && changes.session.currentValue &&
      changes.session.previousValue !== changes.session.currentValue) {
      this.initInputs();
    }
  }

    onSubmit()
    {
      if (this.sessionForm.invalid) {
        return false;
      } else {
        this.sessionSubmit.emit(this.sessionForm.value);
      }
    }
}




