import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Speaker} from "../../shared/speaker/speaker";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SpeakerService} from "../../shared/speaker.service";



@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit {

  speakers: Speaker[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Speaker>;


  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'position', 'organization', 'short_bio'];

  constructor(private speakerService: SpeakerService) {
    this.dataSource = new MatTableDataSource(this.speakers);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllSpeakers();
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
        console.log("speakers", this.speakers);
      })
  }

}
