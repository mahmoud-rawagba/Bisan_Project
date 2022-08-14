import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDescriptionComponent} from './components/job-description/job-description.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ForgotPassword', component: ForgotPasswordComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'JobDescriptionComponent', component:JobDescriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
