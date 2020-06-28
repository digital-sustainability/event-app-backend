import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Topic } from 'src/app/shared/topic/topic';
import { TopicService } from 'src/app/shared/topic/topic.service';

@Component({
  selector: 'app-topic-edit-modal',
  templateUrl: './topic-edit-modal.component.html',
  styleUrls: ['./topic-edit-modal.component.scss']
})
export class TopicEditModalComponent implements OnInit {
  topicForm: FormGroup;
  loading: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TopicEditModalComponent>,
    private topicService: TopicService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loading = false;

    this.topicForm = new FormGroup({
      'identifier': new FormControl(this.data.topic.identifier, [
        Validators.required
      ]),
      'title': new FormControl(this.data.topic.title, [
        Validators.required
      ]),
      'description': new FormControl(this.data.topic.description)
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.loading = true;

    const topic = this.topicForm.value;
    topic.id = this.data.topic.id;

    this.topicService.updateTopic(topic).subscribe((topic: Topic) => {
      this.dialogRef.close({topic: topic});
    }, (err) => {
      this.snackBar.open('Topic konnte nicht aktualisiert werden', '', {
        duration: 3000,
        panelClass: 'fail'
      });
      this.loading = false;
    });
  }

}
