import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatDialog} from '@angular/material';
import { Notification } from 'src/app/shared/notification/notification';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { Topic } from 'src/app/shared/topic/topic';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TopicService } from 'src/app/shared/topic/topic.service';
import {ENTER, COMMA} from "@angular/cdk/keycodes";
import { NotificationLinkModalComponent } from '../notification-link-modal/notification-link-modal.component';

@Component({
  selector: 'app-notification-create',
  templateUrl: './notification-create.component.html',
  styleUrls: ['./notification-create.component.scss']
})
export class NotificationCreateComponent implements OnInit {
  @Output() updateNotifications: EventEmitter<void> = new EventEmitter<void>();

  notificationForm: FormGroup;

  @Input() allTopics: Topic[];
  topicForm = new FormControl();
  filteredTopics: Observable<Topic[] | string[]>;
  selectedTopics: Topic[] = [];
  seperators = [ENTER, COMMA];

  redirect = false;
  redirectTo: string;
  redirectId: number;

  @ViewChild('topicInput', { static: true }) topicInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: true }) matAutocomplete: MatAutocomplete;

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private notificationService: NotificationService
  ) {
    this.filteredTopics = this.topicForm.valueChanges.pipe (
      startWith(null),
      map((value: string | null) => value ?
        this._filter(this.allTopics.filter((topic: Topic) => !this.selectedTopics.some((top: Topic) => top.id === topic.id)), value) :
        this.allTopics.filter((topic) => !this.selectedTopics.some((top: Topic) => top.id === topic.id)))
    );
  }

  ngOnInit() {
    this.notificationForm = new FormGroup({
      'title': new FormControl('', [
        Validators.required
      ]),
      'body': new FormControl('', [
        Validators.required
      ]),
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
/*      if ((value || '').trim()) {
        this.speakers.push(value);
      }*/

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.topicForm.setValue(null);
    }
  }

  remove(topic: Topic): void {
    const index = this.selectedTopics.indexOf(topic);
    this.selectedTopics.splice(index, 1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.selectedTopics.length < 5) {
      this.selectedTopics.push(event.option.value);
      this.topicInput.nativeElement.value = '';
      this.topicForm.setValue(null);
    }
  }

  private _filter(topics: Topic[], value: any): Topic[] {
    if (!value.toLowerCase) {
      return [value];
    }
    const filterValue = (<string>value).toLowerCase();
    return topics.filter((topic: Topic) => {
      return topic.identifier.toLowerCase().includes(filterValue);
    });
  }

  onSendNotification(): void {
    if (!confirm('Benachrichtigung an die ausgewählten Geräte versenden?')) {
      return;
    }

    const notification = this.notificationForm.value;
    notification.topics = this.selectedTopics.map((topic) => {
      return topic.identifier;
    }).join(',');


    this.notificationService.sendNotification(notification).subscribe((result) => {
      if (result) {
        this.snackBar.open('Versendet.', '', {
          duration: 3000,
        });
        this.notificationForm.reset();
        this.selectedTopics = [];

        this.updateNotifications.emit();
      } else {
        this.snackBar.open('Fehlgeschlagen. Interner Server-Fehler.', '', {
          duration: 3000,
        });
      }
    }, (err) => {
      this.snackBar.open('Benachrichtigungen konnte nicht versendet werden.', '', {
        duration: 3000,
      });
    });
  }

  onShowNotificationLinkModal() {
    this.redirectTo = 'event'
    this.dialog.open(NotificationLinkModalComponent, {
      height: '700px',
      width: '800px',
      data: {
        redirect: this.redirect,
        redirectTo: this.redirectTo,
        redirectId: this.redirectId
      }
    }).afterClosed().subscribe((result) => {
      if (result) {
        if (result.redirect) {
          this.redirect = true;
          this.redirectTo = result.redirectTo;
          this.redirectId = result.redirectId;
        } else {
          this.redirect = false;
        }
      }
    });
  }

}
