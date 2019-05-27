import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../../shared/event/event";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  @Input() events: Event[];

  displayedColumns: string[] = ['id', 'title', 'description', 'start', 'end', 'location', 'image_path', 'published'];

  id: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }



/*  goToDetailEvent(id) {
    this.router.navigate(['/event-detail', id])
  }*/



}
