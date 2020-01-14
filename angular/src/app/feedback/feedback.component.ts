import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedbackService } from '../shared/feedback/feedback.service';
import { JoinedFeedback } from '../shared/feedback/joined-feedback';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [
    'event_title',
    'session_title',
    'presentation_title',
    'speakers',
    'handle',
    'uuid',
    'grade',
    'comment_positive',
    'comment_negative',
    'createdAt',
  ];

  joinedFeedbacks: JoinedFeedback[];
  dataSource: MatTableDataSource<JoinedFeedback>;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
    this.feedbackService.find()
      .subscribe((joinedFeedbacks) => {
        this.joinedFeedbacks = joinedFeedbacks;
        this.dataSource = new MatTableDataSource(this.joinedFeedbacks);
        this.dataSource.paginator = this.paginator;

        this.dataSource.sort = this.sort;
      });
  }

  /**
   * Filters the Events
   * Ignores higher case letters
   *
   * @param {string} filterValue
   */
  applyFilter(filterValue: string) {
    console.log(this.dataSource.paginator.getNumberOfPages());
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
