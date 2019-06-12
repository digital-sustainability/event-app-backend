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
  presentation: Presentation;

  displayedColumns: string[] = ['id', 'title', 'abstract', 'slides', 'start', 'end', 'room', 'details', 'update', 'delete'];

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.getAllPresentations();
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
    if(changes.sessionId && changes.sessionId.currentValue !== changes.sessionId.previousValue) {
      this.getAllPresentations();
    }
  }

  // todo: confirmation before deleting something
  deletePresentationById(id) {
    this.presentationService.deletePresentation(id)
      .subscribe((presentation) => {
        this.presentation = presentation;
        this.ngOnInit();
        console.log("deleted", this.presentations);
      })
  }





}
