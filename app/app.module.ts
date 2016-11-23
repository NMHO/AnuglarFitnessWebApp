import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { LoginComponent }   from './login/login.component';
import { SignupComponent }   from './signup/signup.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserService } from './services/user.service'

import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
