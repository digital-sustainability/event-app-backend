import { Component, OnInit } from '@angular/core';
import {PresentationService} from "../../shared/presentation.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-presentation-create',
  templateUrl: './presentation-create.component.html',
  styleUrls: ['./presentation-create.component.scss']
})
export class PresentationCreateComponent implements OnInit {

  constructor(private presentationService: PresentationService,
              private router: Router,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  submit(formData: any) {
    this.presentationService.createPresentation(formData)
      .subscribe((presentations) => {
        console.log(presentations);
        this.router.navigate(['../../']);
      }, (err) => {
        console.log('Error', err);
        this.snackbar.open('Präsentation konnte nicht erstellt werden. Überprüfe alle Felder.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

}
