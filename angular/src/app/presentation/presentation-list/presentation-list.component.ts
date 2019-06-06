import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PresentationService} from "../../shared/presentation.service";
import {Presentation} from "../../shared/presenation/presentation";

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit, OnChanges {

  @Input() sessionId;
  presentations: Presentation[];

  displayedColumns: string[] = ['id', 'title', 'abstract', 'slides', 'start', 'end', 'room'];

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
  }

  getAllPresentations() {
    this.presentationService.getPresentations({
      session_id: this.sessionId
    })
      .subscribe((presentations) => {
        this.presentations = presentations;
        console.log('presentations:', this.presentations)
      })
  };

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.sessionId && changes.sessionId.currentValue !== changes.eventId.previousValue) {
      this.getAllPresentations();
    }
  }





}
