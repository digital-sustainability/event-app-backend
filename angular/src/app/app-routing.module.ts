import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedInGuard } from './shared/auth/only-logged-in.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterSuccessfulComponent } from './auth/register-successful/register-successful.component';
import { RegisterConfirmComponent } from './auth/register-confirm/register-confirm.component';
import { EditComponent } from './auth/edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { state: 'home' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { state: 'login' }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: { state: 'register' }
    },
    {
        path: 'register/successful',
        component: RegisterSuccessfulComponent,
        data: { state: 'registerSuccessful' }
    },
    {
        path: 'register/confirm',
        component: RegisterConfirmComponent,
        data: { state: 'registerConfirm' }
    },
    {
        path: 'user/edit',
        canActivate: [OnlyLoggedInGuard],
        component: EditComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }