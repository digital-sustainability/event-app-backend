import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {Speaker} from "../../shared/speaker/speaker";
import {SpeakerService} from "../../shared/speaker.service";

@Component({
  selector: 'app-speaker-edit',
  templateUrl: './speaker-edit.component.html',
  styleUrls: ['./speaker-edit.component.scss']
})
export class SpeakerEditComponent implements OnInit {

  private sub: Subscription;
  private speaker_id: number;
  private speaker: Speaker;

  constructor(private route: ActivatedRoute,
              private speakerService: SpeakerService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.speaker_id = params['id'];

      this.speakerService.getSpeakerById(this.speaker_id)
        .subscribe( (speaker) => {
          this.speaker = speaker;
          console.log(this.speaker);
        });
    });

  }

  submit(formData) {
    let speaker = formData;
    speaker.id = this.speaker_id;
    this.speakerService.updateSpeaker(speaker)
      .subscribe( (speakers) => {
        console.log("new", speakers);
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
