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
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    SailsModule.forRoot(),
    HttpClientModule,
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
