import { Component, OnInit } from '@angular/core';
import {Speaker} from "../shared/speaker/speaker";
import {SpeakerService} from "../shared/speaker.service";
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {

  speakers: Speaker[];

  constructor(private speakerService: SpeakerService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.getAllSpeakers();
  }

  getASpeakerById() {
    this.speakerService.getSpeakerById(1)
      .subscribe((speaker) => {
        console.log("Speaker 1", speaker);
      });
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe((speakers) => {
        console.log("alle Speakers", speakers);
        this.speakers = speakers;
        console.log("spekers", this.speakers);
      })
  }

}
