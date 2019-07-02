import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OnlyLoggedInGuard} from './shared/auth/only-logged-in.guard';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSuccessfulComponent} from './auth/register-successful/register-successful.component';
import {RegisterConfirmComponent} from './auth/register-confirm/register-confirm.component';
import {EditComponent} from './auth/edit/edit.component';
import {EventComponent} from "./event/event.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {SpeakerComponent} from "./speaker/speaker.component";
import {EventFormComponent} from "./event/event-form/event-form.component";
import {SpeakerFormComponent} from "./speaker/speaker-form/speaker-form.component";
import {EventListComponent} from "./event/event-list/event-list.component";
import {EventDetailComponent} from "./event/event-detail/event-detail.component";
import {SpeakerDetailComponent} from "./speaker/speaker-detail/speaker-detail.component";
import {SessionComponent} from "./session/session.component";
import {SessionFormComponent} from "./session/session-form/session-form.component";
import {SessionDetailComponent} from "./session/session-detail/session-detail.component";
import {PresentationComponent} from "./presentation/presentation.component";
import {PresenationFormComponent} from "./presentation/presenation-form/presenation-form.component";
import {PresentationDetailComponent} from "./presentation/presentation-detail/presentation-detail.component";
import {EventCreateComponent} from "./event/event-create/event-create.component";
import {EventEditComponent} from "./event/event-edit/event-edit.component";
import {SpeakerCreateComponent} from "./speaker/speaker-create/speaker-create.component";
import {SpeakerEditComponent} from "./speaker/speaker-edit/speaker-edit.component";
import {SessionCreateComponent} from "./session/session-create/session-create.component";
import {SessionEditComponent} from "./session/session-edit/session-edit.component";
import {PresentationEditComponent} from "./presentation/presentation-edit/presentation-edit.component";
import {PresentationCreateComponent} from "./presentation/presentation-create/presentation-create.component";

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

    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id',
    canActivate: [OnlyLoggedInGuard],
    component: EventDetailComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: EventEditComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/create',
    canActivate: [OnlyLoggedInGuard],
    component: SessionCreateComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/:session_id',
    canActivate: [OnlyLoggedInGuard],
    component: SessionDetailComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/:session_id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: SessionEditComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/create',
    canActivate: [OnlyLoggedInGuard],
    component: PresentationCreateComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/:presentation_id',
    canActivate: [OnlyLoggedInGuard],
    component: PresentationDetailComponent,
    //data: { state: 'events' }
  },
  {
    path: 'event/:event_id/sessions/:session_id/presentations/:presentation_id/edit',
    canActivate: [OnlyLoggedInGuard],
    component: PresentationEditComponent,
    //data: { state: 'events' }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
