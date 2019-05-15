import {Component, Input, OnInit} from '@angular/core';
import {Speaker} from "../../shared/speaker/speaker";


@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit {
  @Input() speakers: Speaker[];

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'position', 'organization', 'short_bio'];

  constructor() { }

  ngOnInit() {
  }

}
