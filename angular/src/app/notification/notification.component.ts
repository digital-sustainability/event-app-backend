import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TopicModalComponent } from '../topic/topic-modal/topic-modal.component';
import { TopicService } from '../shared/topic/topic.service';
import { Topic } from '../shared/topic/topic';
import { NotificationService } from '../shared/notification/notification.service';
import { Notification } from '../shared/notification/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  topics: Topic[] = [];

  updateNotificationList = false;

  constructor (
    public _dialog: MatDialog,
    private topicService: TopicService,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics(): void {
    this.topicService.getTopics().subscribe((topics) => {
      this.topics = topics;
    }, (err) => {
      this.snackBar.open('Topics konnten nicht geladen werden.', '', {
        duration: 3000,
      });
    });
  }

  onOpenTopicsModal(): void {
    this._dialog.open(TopicModalComponent, {
      height: '700px',
      width: '800px',
      data: {}
    }).afterClosed().subscribe(() => {
      this.getTopics();
    });
  }

  updateNotifications() {
    this.updateNotificationList = !this.updateNotificationList;
  }

}
