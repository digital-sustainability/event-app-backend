import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { Notification } from 'src/app/shared/notification/notification';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnChanges, OnInit {
  @Input() update: boolean;

  dataSource = new MatTableDataSource<Notification>([]);
  displayedColumns: string[] = ['id', 'createdAt', 'title', 'body', 'topics', 'redirect', 'actions'];
  loading = false;

  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllNotifications();
  }

  ngOnChanges() {
    this.getAllNotifications();
  }

  getAllNotifications() {
    this.loading = true;

    this.notificationService.getNotifications().subscribe((notifications: Notification[]) => {
      notifications.sort((a: Notification, b: Notification) => b.createdAt - a.createdAt);
      this.dataSource = new MatTableDataSource(notifications);

      this.loading = false;
    }, (err) => {
      this.snackBar.open('Benachrichtigungen konnten nicht geladen werden.', '', {
        duration: 3000,
      });
    });
  }

  onDeleteNotification(notification: Notification) {
    if (confirm('Die Benachrichtigung wird unwiderruflich aus dem Verlauf gelöscht. Fortfahren?')) {
      this.notificationService.deleteNotification(notification.id).subscribe(() => {
        this.snackBar.open('Benachrichtigung gelöscht', '', {
          duration: 3000,
        });

        this.getAllNotifications();
      }, (err) => {
        this.snackBar.open('Benachrichtigung konnte nicht gelöscht werden', '', {
          duration: 3000,
          panelClass: 'fail'
        });
      });
    }
  }
}
