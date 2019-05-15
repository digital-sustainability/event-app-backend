import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SpeakerService} from "../../shared/speaker.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  speakerForm: FormGroup;

  constructor(
    private speakerService: SpeakerService,
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.speakerForm = new FormGroup({
      'first_name': new FormControl('', [
        Validators.required
      ]),
      'last_name': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
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

  onSubmit():boolean {
    if(this.speakerForm.invalid) {
      return false;
    } else {
      this.speakerService.createSpeaker(this.speakerForm.value)
        .subscribe((speakers) => {
          console.log("new", speakers)
          this.router.navigate(['speaker']);
        }, (err) => {
          console.log('Error', err);
          this.snackbar.open('Speaker konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
            duration: 3000,
            panelClass: 'fail'
          });
        });
    }
  }


}
