import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpeakerService} from "../../shared/speaker.service";
import {Speaker} from "../../shared/speaker/speaker";

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.component.html',
  styleUrls: ['./speaker-detail.component.scss']
})
export class SpeakerDetailComponent implements OnInit {

  speaker_id: number;
  speaker: Speaker;
  private sub: any;

  constructor(
    private speakerService: SpeakerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.speaker_id = params['id'];
      this.speakerService.getSpeakerById(this.speaker_id)
        .subscribe((speaker) => {
          speaker.merged_short_bio = speaker.formatted_short_bio ? speaker.formatted_short_bio : speaker.short_bio;
          this.speaker = speaker;
        });
    });

  }
}
