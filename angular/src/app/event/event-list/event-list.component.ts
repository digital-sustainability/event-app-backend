import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() events: Event[];

  displayedColumns: string[] = ['id', 'title', 'description', 'start','end', 'location', 'image_path', 'published'];

  constructor() { }

  ngOnInit() {
  }

}
