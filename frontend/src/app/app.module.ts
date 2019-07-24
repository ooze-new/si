import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AuthInterceptor } from './auth-interceptor';
import { AuthService, TokenStore, TOKEN_STORE } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';

import { IsAuthGuard } from './is-auth.guard';
import { IsNotAuthGuard } from './is-not-auth.guard';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent, canActivate: [IsNotAuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [IsNotAuthGuard] },
  { path: 'add', component: AddTaskComponent, canActivate: [IsAuthGuard] },
  { path: 'edit/:id', component: EditTaskComponent, canActivate: [IsAuthGuard] },
  { path: '', component: TaskListComponent, canActivate: [IsAuthGuard] },
];

const AuthSetviceFactory = (
  store: TokenStore,
  http: HttpClient
): AuthService => {
  const storageKey = 'access_token';
  const service = new AuthService(http, store, storageKey);
  service.loadToken();

  return service;
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: TOKEN_STORE, useValue: window.sessionStorage},
    {
      provide: AuthService,
      useFactory: AuthSetviceFactory,
      deps: [ TOKEN_STORE,  HttpClient ]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
