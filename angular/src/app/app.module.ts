import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SailsModule } from "angular2-sails";
import { HttpInterceptorService } from './shared/auth/http-interceptor.service';
import { AuthService } from './shared/auth/auth.service';
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessfulComponent } from './auth/register-successful/register-successful.component';
import { RegisterConfirmComponent } from './auth/register-confirm/register-confirm.component';
import { EditComponent } from './auth/edit/edit.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { PresenationFormComponent } from './presentation/presenation-form/presenation-form.component';
import { SpeakerFormComponent } from './speaker/speaker-form/speaker-form.component';
import { SessionFormComponent } from './session/session-form/session-form.component';
import { EventComponent } from './event/event.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { MatAutocomplete, MatAutocompleteModule } from "@angular/material/autocomplete";
import { DateAdapter, MatNativeDateModule } from "@angular/material/core";
import { MatDatepicker, MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { SessionComponent } from './session/session.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerDetailComponent } from './speaker/speaker-detail/speaker-detail.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';
import { PresentationListComponent } from './presentation/presentation-list/presentation-list.component';
import { PresentationDetailComponent } from './presentation/presentation-detail/presentation-detail.component';
import { EventCreateComponent } from './event/event-create/event-create.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { PresentationEditComponent } from './presentation/presentation-edit/presentation-edit.component';
import { PresentationCreateComponent } from './presentation/presentation-create/presentation-create.component';
import { SessionEditComponent } from './session/session-edit/session-edit.component';
import { SessionCreateComponent } from './session/session-create/session-create.component';
import { SpeakerEditComponent } from './speaker/speaker-edit/speaker-edit.component';
import { SpeakerCreateComponent } from './speaker/speaker-create/speaker-create.component';
import { DeleteDialogComponent } from './shared/delete-dialog/delete-dialog.component';
import { PresentationSpeakerComponent } from './presentation-speaker/presentation-speaker.component';
import { MomentModule } from 'ngx-moment';
import { MatTableExporterModule } from 'mat-table-exporter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DatePipePipe } from './shared/date-pipe.pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { EventCategoryComponent } from './event-category/event-category.component';
import { CategoryPipe } from './event/event-list/category.pipe';
import { NotificationCreateComponent } from './notification/notification-create/notification-create.component';
import { NotificationListComponent } from './notification/notification-list/notification-list.component';
import { TopicModalComponent } from './topic/topic-modal/topic-modal.component';
import { NotificationComponent } from './notification/notification.component';

export function appInitFactory(authService: AuthService): () => Promise<any> {
  return () => authService.checkLogin().toPromise();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RegisterConfirmComponent,
    RegisterSuccessfulComponent,
    EditComponent,
    EventFormComponent,
    PresenationFormComponent,
    SpeakerFormComponent,
    SessionFormComponent,
    EventComponent,
    SpeakerComponent,
    FeedbackComponent,
    EventListComponent,
    EventDetailComponent,
    SessionComponent,
    PresentationComponent,
    SpeakerListComponent,
    SpeakerDetailComponent,
    SessionListComponent,
    SessionDetailComponent,
    PresentationListComponent,
    PresentationDetailComponent,
    EventCreateComponent,
    EventEditComponent,
    PresentationEditComponent,
    PresentationCreateComponent,
    SessionEditComponent,
    SessionCreateComponent,
    SpeakerEditComponent,
    SpeakerCreateComponent,
    DeleteDialogComponent,
    PresentationSpeakerComponent,
    DatePipePipe,
    EventCategoryComponent,
    CategoryPipe,
    NotificationCreateComponent,
    NotificationListComponent,
    TopicModalComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SailsModule.forRoot(),
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDialogModule,
    MatAutocompleteModule,
    MomentModule,
    MatTableExporterModule,
    AngularEditorModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {provide: APP_INITIALIZER, useFactory: appInitFactory, deps: [AuthService], multi: true},
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'de'},
  ],
  entryComponents: [
    DeleteDialogComponent,
    TopicModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
