import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Speaker} from "../../shared/speaker/speaker";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SpeakerService} from "../../shared/speaker.service";



@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit, AfterViewInit {

  speakers: Speaker[];
  speaker: Speaker;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Speaker>;

  speaker_id: number;


  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'position', 'organization', 'short_bio','details', 'update', 'delete'];

  constructor(private speakerService: SpeakerService) {
  }

  ngOnInit() {
    this.getAllSpeakers();
  }

  ngAfterViewInit(): void {
    // todo: check why paginator and sort is not working
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  deleteSpeakerById(id) {
    this.speakerService.deleteSpeaker(id)
      .subscribe((speaker) => {
        this.speaker = speaker;
        this.ngOnInit();
        console.log("deleted", this.speakers)
      })
  }




}
