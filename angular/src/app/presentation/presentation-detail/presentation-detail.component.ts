import {Component, OnDestroy, OnInit} from '@angular/core';
import {Presentation} from "../../shared/presenation/presentation";
import {PresentationService} from "../../shared/presentation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-presentation-detail',
  templateUrl: './presentation-detail.component.html',
  styleUrls: ['./presentation-detail.component.scss']
})
export class PresentationDetailComponent implements OnInit, OnDestroy {

  presentation_id: number;
  presentation: Presentation;
  private sub: any;

  constructor(private presentationService: PresentationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.presentation_id = params['presentation_id'];
      this.presentationService.getPresenationById(this.presentation_id)
        .subscribe((presentation) => {
          this.presentation = presentation;
          console.log("dude", this.presentation);
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
