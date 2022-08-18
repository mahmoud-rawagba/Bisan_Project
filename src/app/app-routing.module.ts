import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDescriptionComponent} from './components/job-description/job-description.component'
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import {CompanyHomePComponent} from './components/company-home-p/company-home-p.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'JobDescriptionComponent', component:JobDescriptionComponent},
  { path: 'CandidateProfileComponent', component:CandidateProfileComponent},
  { path: 'CompanyHome',component:CompanyHomePComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
