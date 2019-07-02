import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";
import {SpeakerService} from "../../shared/speaker.service";
import {Speaker} from "../../shared/speaker/speaker";

@Component({
  selector: 'app-speaker-create',
  templateUrl: './speaker-create.component.html',
  styleUrls: ['./speaker-create.component.scss']
})
export class SpeakerCreateComponent implements OnInit {

  speaker: Speaker;

  constructor(private speakerService: SpeakerService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {}

  submit(formData: any) {
    this.speakerService.createSpeaker(formData)
      .subscribe((speaker) => {
        this.speaker = speaker;
        console.log("new", speaker);
        this.router.navigate(['speaker']);
        this.snackbar.open('Speaker wurd erfolgreich erstellt', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Speaker konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
