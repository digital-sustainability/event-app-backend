import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/index";
import {Presentation} from "../../shared/presenation/presentation";
import {ActivatedRoute, Router} from "@angular/router";
import {PresentationService} from "../../shared/presentation.service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-presentation-edit',
  templateUrl: './presentation-edit.component.html',
  styleUrls: ['./presentation-edit.component.scss']
})
export class PresentationEditComponent implements OnInit {

  private sub: Subscription;
  private presentation_id: number;
  private presentation: Presentation;

  constructor(private route: ActivatedRoute,
              private presentationService: PresentationService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.presentation_id = params['presentation_id'];

      this.presentationService.getPresenationById(this.presentation_id)
        .subscribe( (presentation) => {
          this.presentation = presentation;
          console.log(this.presentation);
        });
    });
  }

  submit(formData) {
    let presentation = formData;
    presentation.id = this.presentation_id;
    this.presentationService.updatePresentation(presentation)
      .subscribe( (presentations) => {
        console.log("new", presentations);
        this.router.navigate(['../../']);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Präsentation konnte nicht geändert werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
