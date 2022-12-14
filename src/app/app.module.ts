import { MatSidenavModule } from '@angular/material/sidenav';
import { CandidateService } from './service/candidate.service';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFileUploaderModule } from "angular-file-uploader";


/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from  './components/forgot-password/forgot-password.component';
import { MatInputModule } from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
/**  HTTP Connection*/

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    ForgotPasswordComponent,
    JobsComponent,
    JobDescriptionComponent,
    CandidateProfileComponent,
    
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFileUploaderModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    HttpClientModule ,
    MatSidenavModule,
  ],
  providers: [CandidateService,DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }