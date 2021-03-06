import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {PresentationService} from '../../shared/presentation.service';
import {Presentation} from '../../shared/presentation/presentation';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {DeleteDialogComponent} from '../../shared/delete-dialog/delete-dialog.component';
import {SessionService} from '../../shared/session.service';
import {ActivatedRoute} from '@angular/router';
import {Session} from '../../shared/session/session';
import { MatTableDataSourceWithPositionSort } from 'src/app/shared/table-data-source-position-sort';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.scss']
})
export class PresentationListComponent implements OnInit {

  @Input() sessionId?: number;
  @Input() eventId?: number;

  presentations: Presentation[];
  presentation: Presentation;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSourceWithPositionSort<Presentation>;

  displayedColumns: string[] = ['actions', 'position', 'title', 'abstract', 'slides', 'start', 'end', 'room'];

  constructor(private presentationService: PresentationService,
              private dialog: MatDialog,
              private snackbar: MatSnackBar,
              private sessionService: SessionService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPresentations();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPresentations() {
    const param = {};
    if (this.eventId) {
      param['event_id'] = this.eventId;
    } else if (this.sessionId) {
      param['session_id'] = this.sessionId;
    }
    this.presentationService.getPresentations(param)
      .subscribe((presentations) => {
        this.presentations = presentations;
        this.presentations.forEach((presentation) => {
          presentation.merged_abstract = presentation.formatted_abstract ? presentation.formatted_abstract : presentation.abstract;
        });
        this.dataSource = new MatTableDataSourceWithPositionSort(this.presentations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('presentations:', this.presentations);
      });
  }

  /*ngOnChanges(changes: SimpleChanges): void {
    if (changes.sessionId && changes.sessionId.currentValue !== changes.sessionId.previousValue) {
      this.getAllPresentations();
    }
  }*/

  deletePresentationById(id: number) {
    this.presentationService.deletePresentation(id)
      .subscribe((presentation) => {
        this.presentation = presentation;
        this.ngOnInit();
        console.log('deleted', this.presentations);
        this.getAllPresentations();
        this.snackbar.open('Pr??sentation erfolgreich gel??scht.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        this.snackbar.open('Pr??sentation konnte nicht gel??scht werden.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
  }

  openDeleteDialog(presentation: Presentation) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {title: `${presentation.title}`}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletePresentationById(presentation.id);
      }
    });
  }



}
