import { Observable } from 'rxjs';
import { Ijobs } from './../../jobs';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../custom-validators';
import { HttpClient } from '@angular/common/http';
import {NgZone} from '@angular/core';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  showFiller = false;
public items=[]
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
  Gender: any = ['Male','Female',"Other"];
  WorkingHours: any=['FullTime', 'PartTime'];
 
  public companyName: any;


 private _url: string = "C:/Users/BisanTraining4/login_new_web/Bisan_Project/src/assets/data/jobs.json"


 constructor(private ngZone: NgZone, private http: HttpClient,
  private router: Router) { }


  ngOnInit(): void {
    this.getJobs()
    .subscribe(data => {
      this.items = data
      console.log(this.items)

    });
  }

  
    getJobs(): Observable<Ijobs[]>{
      return this.http.get<Ijobs[]>(this._url);
    }

  form: FormGroup = new FormGroup({});
  filterForm = new FormGroup({
    city: new FormControl(null),
    workingHours: new FormControl(null),
    gender: new FormControl(null),
  })

  filter(){
    console.log(this.filterForm.value)
  }
  goToDescribe(value){
    let companyName= value;
    console.log("clicked! with value"+ companyName );

    this.router.navigate(['JobDescriptionComponent']);
  }
  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  

}
