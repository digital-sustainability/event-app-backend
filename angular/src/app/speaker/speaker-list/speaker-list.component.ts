import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Speaker} from "../../shared/speaker/speaker";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {SpeakerService} from "../../shared/speaker.service";
import {DeleteDialogComponent} from "../../shared/delete-dialog/delete-dialog.component";



@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit, AfterViewInit, OnChanges {

  speakers: Speaker[];
  speaker: Speaker;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Speaker>;

  speaker_id: number;


  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'position', 'organization', 'short_bio','details', 'update', 'delete'];

  constructor(private speakerService: SpeakerService,
              private dialog: MatDialog,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.getAllSpeakers();
  }

  ngOnChanges() {
    this.getAllSpeakers();
  }

  ngAfterViewInit(): void {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe((speakers) => {
        console.log("alle Speakers", speakers);
        this.speakers = speakers;
        this.dataSource = new MatTableDataSource(this.speakers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("speakers", this.speakers);
      })
  }

  // todo: confirmation before deleting something
  private deleteSpeakerById(id) {
    this.speakerService.deleteSpeaker(id)
      .subscribe((speaker) => {
        this.speaker = speaker;
        this.ngOnInit();
        console.log("deleted", this.speakers);
        this.snackbar.open('Speaker erfolgreich gelöscht.', '', {
          duration: 3000,
          panelClass: 'success'
        });
      }, (err) => {
        this.snackbar.open('Speaker konnte nicht gelöscht werden.', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      })
  }

  openDeleteDialog(speaker: Speaker) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {title: `${speaker.first_name} ${speaker.last_name}`}
    });
    dialogRef.afterClosed().subscribe(result => {
     if(result) {
       this.deleteSpeakerById(speaker.id);
     }
    });
  }




}
