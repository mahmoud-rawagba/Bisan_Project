import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './components/add-job/add-job.component';
import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDescriptionComponent} from './components/job-description/job-description.component'
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import {AppliedJobsComponent} from './components/applied-jobs/applied-jobs.component'
// import {CandidateProfileForCompanyComponent} from './components/candidate-profile-for-company/candidate-profile-for-company.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'JobDescription', component:JobDescriptionComponent},
  { path: 'CandidateProfile', component:CandidateProfileComponent},
  { path: 'CompanyProfile', component:CompanyProfileComponent },
  {path: 'AddJob', component:AddJobComponent},
  {path: 'AppliedJobs', component:AppliedJobsComponent},
  // {path: 'CandidateProfileForCompany', component:CandidateProfileForCompanyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
