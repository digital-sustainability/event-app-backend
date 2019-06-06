import { Component, OnInit } from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth/auth.service";
import {EventService} from "../../shared/event.service";
import {PresentationService} from "../../shared/presentation.service";

@Component({
  selector: 'app-presenation-form',
  templateUrl: './presenation-form.component.html',
  styleUrls: ['./presenation-form.component.scss']
})
export class PresenationFormComponent implements OnInit {


  presentation: Presentation;

  presentationForm: FormGroup;

  constructor(
    private authService: AuthService,
    private presentationService: PresentationService,
    private router: Router,
    private snackbar: MatSnackBar
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

  onSubmit():boolean {
    if(this.presentationForm.invalid) {
      return false;
    } else {
      this.presentationService.createPresentation(this.presentationForm.value)
        .subscribe((presentation) => {
          console.log("new", presentation)
          this.router.navigate(['session-detail']);
        }, (err) => {
          console.log('Error', err);
          this.snackbar.open('Präsentation konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
            duration: 3000,
            panelClass: 'fail'
          });
        });
    }
  }

}
