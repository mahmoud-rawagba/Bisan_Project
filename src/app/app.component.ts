import { Iprofile } from './candProfile';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showFiller = true;
  user: Iprofile
  type;
  bar=true
  
  title = 'angular-material-login-template';
  constructor(private http: HttpClient, private router: Router) { 

  }
  home(){
          this.router.navigate(['jobs']);
  }


  account(){

    this.router.navigate(['CandidateProfile']);

  }


}
