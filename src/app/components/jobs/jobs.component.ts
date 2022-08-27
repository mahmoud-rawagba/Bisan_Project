import { Iprofile } from './../../candProfile';
import { Observable } from 'rxjs';
import { Ijobs } from './../../jobs';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Interfilter} from './../../filter'

import { HttpClient } from '@angular/common/http';
import {NgZone} from '@angular/core';





@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],

})

export class JobsComponent implements OnInit {
  jobsList : Ijobs;
  user: Iprofile;
  filterF: Interfilter;
  type;
  personID;
  param;
  loginF:{};
   jobs={

   };
  showFiller = false;
public items=[]
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah','Any'];
  Gender: any = ['Male','Female','Any'];
  WorkingHours: any=['FullTime', 'PartTime',"Any"];
  Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];
  Field: any = ['CS','Civil Engineer', 'QA','FrontEnd','Other']
 
  public companyName: any;


 private _url: string = "./../assets/data/jobs.json"


 constructor(private ngZone: NgZone, private http:HttpClient,
  private router: Router) {


    this.type =this.router.getCurrentNavigation().extras.state.userInfo.type
    this.loginF= this.router.getCurrentNavigation().extras.state.loginF

    this.user=this.router.getCurrentNavigation().extras.state.userInfo
    if ( this.type == "person"){
    
      //this.param=this.router.getCurrentNavigation().extras.state.example
      this.param = this.router.getCurrentNavigation().extras.state.example

     
     
    }


  
   }


  ngOnInit(): void {
if(this.type == "person"){

    this.http.get('http://10.10.32.82:8080/Job/Show', {
      params:this.param,
      observe: 'response'
    })
    .toPromise()
    .then(response => {

      this.jobs=response.body

 
    })
   
    .catch(console.log);

    

  }
  else{
    this.http.get('http://10.10.32.82:8080/Company/'+this.user.company_id+'/showJobs', {
  
      observe: 'response'
    })
    .toPromise()
    .then(response => {

      this.jobs= response.body

 
    })
   
    .catch(console.log);

   

  }


  }


  form: FormGroup = new FormGroup({});
  filterForm = new FormGroup({
    city: new FormControl(''),
    studyDegree: new FormControl(''),
    personField: new FormControl(''),
    gender: new FormControl(''),
  })

  filter(){
    
    this.filterF.city = this.filterForm.get('city').value
    this.filterF.gender = this.filterForm.get('gender').value
    this.filterF.studyDegree = this.filterForm.get('studyDegree').value
    this.filterF.personField= this.filterForm.get('personField').value
    this.param=JSON.parse(JSON.stringify(this.filterF))
   

    this.http.get('http://10.10.32.82:8080/Job/search', {
      params:this.param,
      observe: 'response'
    })

    .toPromise()
    .then(response => {

      this.jobs= response.body

 
    })
    
   
    .catch(console.log);


  }
  
  goToDescribe(JobId){
    this.personID=this.user.personID
    this.personID=JSON.parse(JSON.stringify(this.personID))
    if(this.type == "person"){
      this.router.navigate(['JobDescriptionComponent'], {state : {example:JobId, type:this.type, personID:this.personID} });

    }
    else{
      this.router.navigate(['JobDescriptionComponent'], {state : {example:JobId, type:this.type, personID:this.personID} });


    }
   
  
  }
  account(){

   this.router.navigate(['CandidateProfileComponent'],{ state: {example :this.user, loginF: this.loginF } });
    
  }
  updateFilter(){
    this.param=this.filterForm;

    this.http.get('http://10.10.32.82:8080/Job/Show', {
      params:this.param,
      observe: 'response'
    })

    .toPromise()
    .then(response => {
      this.jobs= response.body

 
    })
    
   
    .catch(console.log);

  }
  addJob(){
    
    this.router.navigate(['AddJob'], {state : {example:this.user.company_id}});

  }

  

}
