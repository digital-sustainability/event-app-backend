import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OnlyLoggedInGuard} from './shared/auth/only-logged-in.guard';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSuccessfulComponent} from './auth/register-successful/register-successful.component';
import {RegisterConfirmComponent} from './auth/register-confirm/register-confirm.component';
import {EventComponent} from './event/event.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {SpeakerComponent} from './speaker/speaker.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {SpeakerDetailComponent} from './speaker/speaker-detail/speaker-detail.component';
import {SessionDetailComponent} from './session/session-detail/session-detail.component';
import {PresentationDetailComponent} from './presentation/presentation-detail/presentation-detail.component';
import {EventCreateComponent} from './event/event-create/event-create.component';
import {EventEditComponent} from './event/event-edit/event-edit.component';
import {SpeakerCreateComponent} from './speaker/speaker-create/speaker-create.component';
import {SpeakerEditComponent} from './speaker/speaker-edit/speaker-edit.component';
import {SessionCreateComponent} from './session/session-create/session-create.component';
import {SessionEditComponent} from './session/session-edit/session-edit.component';
import {PresentationEditComponent} from './presentation/presentation-edit/presentation-edit.component';
import {PresentationCreateComponent} from './presentation/presentation-create/presentation-create.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {state: 'login'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {state: 'register'}
  },
  {
    path: 'register/successful',
    component: RegisterSuccessfulComponent,
    data: {state: 'registerSuccessful'}
  },
  {
    path: 'register/confirm',
    component: RegisterConfirmComponent,
    data: {state: 'registerConfirm'}
  },
  {
    path: 'speaker',
    canActivate: [OnlyLoggedInGuard],
    component: SpeakerComponent,
  },
  {
    path: 'speaker/create',
    canActivate: [OnlyLoggedInGuard],
    component: SpeakerCreateComponent,
  },
  {
    path: 'speaker/:id',
    canActivate: [OnlyLoggedInGuard],
    component: SpeakerDetailComponent,
  },
  {
    path: 'speaker/:id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: SpeakerEditComponent,
  },
  {
    path: 'event',
    canActivate: [OnlyLoggedInGuard],
    component: EventComponent,
  },
  {
    path: 'event/create',
    canActivate: [OnlyLoggedInGuard],
    component: EventCreateComponent,
  },
  {
    path: 'event/:event_id',
    canActivate: [OnlyLoggedInGuard],
    component: EventDetailComponent,
  },
  {
    path: 'event/:event_id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: EventEditComponent,
  },
  {
    path: 'event/:event_id/sessions/create',
    canActivate: [OnlyLoggedInGuard],
    component: SessionCreateComponent,
  },
  {
    path: 'event/:event_id/sessions/:session_id',
    canActivate: [OnlyLoggedInGuard],
    component: SessionDetailComponent,
  },
  {
    path: 'event/:event_id/sessions/:session_id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: SessionEditComponent,
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/create', // presentation belongs to a session
    canActivate: [OnlyLoggedInGuard],
    component: PresentationCreateComponent,
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/:presentation_id', // presentation belongs to a session
    canActivate: [OnlyLoggedInGuard],
    component: PresentationDetailComponent,
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/:presentation_id/edit', // presentation belongs to a session
    canActivate: [OnlyLoggedInGuard],
    component: PresentationEditComponent,
  },
  {
    path: 'event/:event_id/presentations/create', // presentation belongs to an event
    canActivate: [OnlyLoggedInGuard],
    component: PresentationCreateComponent,
  },
  {
    path: 'event/:event_id/presentations/:presentation_id', // presentation belongs to an event
    canActivate: [OnlyLoggedInGuard],
    component: PresentationDetailComponent,
  },
  {
    path: 'event/:event_id/presentations/:presentation_id/edit', // presentation belongs to an event
    canActivate: [OnlyLoggedInGuard],
    component: PresentationEditComponent,
  },
  {
    path: 'feedback',
    canActivate: [OnlyLoggedInGuard],
    component: FeedbackComponent
  },
  {
    path: 'notifications',
    canActivate: [OnlyLoggedInGuard],
    component: NotificationComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
