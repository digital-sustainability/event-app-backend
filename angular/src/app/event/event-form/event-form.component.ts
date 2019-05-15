import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "../../shared/event.service";
import {MatSnackBar} from "@angular/material";
import {Router, NavigationExtras} from "@angular/router";
import {AuthService} from "../../shared/auth/auth.service";
import {Event} from "../../shared/event/event";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
  @Input() events: Event[];

  eventForm: FormGroup;

  constructor(
    private authService: AuthService,
    private eventService: EventService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

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

      ]),
    });
  }

  onSubmit():boolean {
    if(this.eventForm.invalid) {
      return false;
    } else {
      this.eventService.createEvent(this.eventForm.value)
        .subscribe((events) => {
          console.log("new", events)
          this.router.navigate(['event']);
        }, (err) => {
          console.log('Error', err);
          this.snackbar.open('Event konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
            duration: 3000,
            panelClass: 'fail'
          });
        });
      }
  }

}
