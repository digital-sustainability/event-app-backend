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
import {
  DateAdapter,
  MatDatepicker, MatDatepickerModule,
  MatInputModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { SessionComponent } from './session/session.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SpeakerListComponent } from './speaker/speaker-list/speaker-list.component';
import { SpeakerDetailComponent } from './speaker/speaker-detail/speaker-detail.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';



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
    MatCheckboxModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {provide: APP_INITIALIZER, useFactory: appInitFactory, deps: [AuthService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
