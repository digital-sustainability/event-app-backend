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
export class PresentationListComponent implements OnInit, OnChanges {

  @Input() sessionId;
  presentations: Presentation[];
  presentation: Presentation;
  session: Session;

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
    this.getSessionForRouting();
  }

  getSessionForRouting() {
    this.route.params.subscribe( (params) => {
      this.sessionService.getSessionById(params['session_id'])
        .subscribe( (session: any) => {
          this.session = session;
        });
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPresentations() {
    this.presentationService.getPresentations({
      session_id: this.sessionId
    })
      .subscribe((presentations) => {
        this.presentations = presentations;
        this.presentations.forEach((presentation) => {
          presentation.merged_abstract = presentation.formatted_abstract ? presentation.formatted_abstract : presentation.abstract;
        });
        this.dataSource = new MatTableDataSourceWithPositionSort(this.presentations);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('presentations:', this.presentations)
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sessionId && changes.sessionId.currentValue !== changes.sessionId.previousValue) {
      this.getAllPresentations();
    }
  }

  deletePresentationById(id: number) {
    this.presentationService.deletePresentation(id)
      .subscribe((presentation) => {
        this.presentation = presentation;
        this.ngOnInit();
        console.log('deleted', this.presentations);
        this.getAllPresentations();
        this.snackbar.open('Präsentation erfolgreich gelöscht.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        this.snackbar.open('Präsentation konnte nicht gelöscht werden.', '', {
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
