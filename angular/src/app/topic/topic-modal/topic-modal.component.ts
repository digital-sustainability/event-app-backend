import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TopicService } from 'src/app/shared/topic/topic.service';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Topic } from 'src/app/shared/topic/topic';
import { TopicEditModalComponent } from './topic-edit-modal/topic-edit-modal.component';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.scss']
})
export class TopicModalComponent implements OnInit {
  topicForm: FormGroup;

  topics: Topic[];

  dataSource = new MatTableDataSource<Topic>([]);
  displayedColumns: string[] = ['id', 'identifier', 'title', 'description', 'actions'];
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private topicService: TopicService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.topicForm = new FormGroup({
      'identifier': new FormControl('', [
        Validators.required
      ]),
      'title': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [

      ])
    });

    this.getAllTopics();
  }

  getAllTopics() {
    this.loading = true;

    this.topicService.getTopics().subscribe((topics) => {
      this.dataSource = new MatTableDataSource(topics);
      this.topics = topics;

      this.loading = false;
    }, (err) => {
      this.snackBar.open('Topics konnten nicht geladen werden.', '', {
        duration: 3000,
      });
    });
  }

  onCreateTopic() {
    this.topicService.createTopic(this.topicForm.value).subscribe(
      (topic) => {
        this.snackBar.open('Topic erstellt', '', {
          duration: 3000,
        });
        this.topicForm.reset();
        this.getAllTopics();
      }, (err) => {
        this.snackBar.open('Topic konnte nicht erstellt', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      }
    );
  }

  onDeleteTopic(topic: Topic) {
    if (confirm('Das Topic wird unwiderruflich gelöscht. Fortfahren?')) {
      this.topicService.deleteTopic(topic.id).subscribe(() => {
        this.snackBar.open('Topic gelöscht', '', {
          duration: 3000,
        });
        this.getAllTopics();
      }, (err) => {
        this.snackBar.open('Topic konnte nicht gelöscht werden', '', {
          duration: 3000,
          panelClass: 'fail'
        });
        this.getAllTopics();
      });
    }
  }

  onEditTopic(topic: Topic, index: number) {
    this.dialog.open(TopicEditModalComponent, {
      data: {
        topic: topic
      }
    }).afterClosed().subscribe((result) => {
      if (result) {
        this.topics[index] = result.topic;
        this.dataSource = new MatTableDataSource(this.topics);
      }
    });
  }
}
