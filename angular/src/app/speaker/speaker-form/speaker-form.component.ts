import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SpeakerService} from "../../shared/speaker.service";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {Speaker} from "../../shared/speaker/speaker";

@Component({
  selector: 'app-speaker-form',
  templateUrl: './speaker-form.component.html',
  styleUrls: ['./speaker-form.component.scss']
})
export class SpeakerFormComponent implements OnInit {

  edit: boolean = false;
  private sub: any;
  speaker: Speaker;
  speaker_id: number;

  speakerForm: FormGroup;

  constructor(
    private speakerService: SpeakerService,
    private router: Router,
    private route: ActivatedRoute,
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

    this.sub = this.route.params.subscribe( params => {
      this.speaker_id = params['id'];
      this.speakerService.getSpeakerById(this.speaker_id)
        .subscribe((speaker) => {
          this.speaker = speaker;
          console.log(this.speaker);
          this.edit = true;
          this.speakerForm.patchValue(this.speaker);
        });
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
