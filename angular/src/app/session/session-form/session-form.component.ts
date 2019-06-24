import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../../shared/session.service";
import {Session} from "../../shared/session/session";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";
import {config} from "rxjs/index";

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit, OnChanges {

  @Output() submit: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() session: Session;
  @Input() buttonTitle: string;

  sessions: Session[];

  sessionForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sessionForm = new FormGroup( {
      'title': new FormControl('', [
        Validators.required
      ]),
      'abstract': new FormControl('', [
        Validators.required
      ]),
      'label_presentations': new FormControl('', [
        Validators.required
      ]),
      'event_id': new FormControl('', [
        Validators.required
      ])
    });
  }

  initInputs() {
    this.sessionForm.get('title').setValue(this.session.title);
    this.sessionForm.get('abstract').setValue(this.session.abstract);
    this.sessionForm.get('label_presentations').setValue(this.session.label_presentations);
    this.sessionForm.get('event_id').setValue(this.session.event_id);
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
        this.submit.emit(this.sessionForm.value);
      }
    }
}

/*  onSubmit():boolean {
    if(this.sessionForm.invalid) {
      return false;
    } else {
      this.sessionService.createSession(this.sessionForm.value)
        .subscribe( (sessions) => {
          console.log('new', sessions);
          this.router.navigate(['/event/event-detail']);
        }, (err) => {
          console.log('Error', err);
          this.snackbar.open('Session konnte nicht erstellt werden. Überprüfe alle Felder.', '',{
            duration: 3000,
            panelClass: 'fail'
          });
        });
    }
  }*/



