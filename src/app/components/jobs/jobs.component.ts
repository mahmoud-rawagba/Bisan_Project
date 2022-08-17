import { Iprofile } from './../../candProfile';
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
  jobsList : Ijobs;
  person : Iprofile;
  param;
   jobs={

   };
  showFiller = false;
public items=[]
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
  Gender: any = ['Male','Female',"Other"];
  WorkingHours: any=['FullTime', 'PartTime'];
 
  public companyName: any;


 private _url: string = "./../assets/data/jobs.json"


 constructor(private ngZone: NgZone, private http:HttpClient,
  private router: Router) {
    this.param=this.router.getCurrentNavigation().extras.state.example
    this.person=this.router.getCurrentNavigation().extras.state.personInfo
    
    //this.jobsList.city= this.router.getCurrentNavigation().extras.state.example.companyID.cities.cityName;
    //this.jobsList.companyName= this.router.getCurrentNavigation().extras.state.example.companyID.companyName;
   //console.log(   "prrrrrrrrrrrrrrrrrrrrrrrrrra" ,this.router.getCurrentNavigation().extras.state.example); 
   }


  ngOnInit(): void {

    this.http.get('http://10.10.32.82:8080/Job/Show', {
      params:this.param,
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log("ewewewwewewewewe",response.body)
      this.jobs= response.body
     //console.log(response);
    //console.log("test1",this.jobs)
 
    })
   
    .catch(console.log);
    console.log("whaaaaaaaaaaaaaaaaaaaat",this.jobs)
   

    // this.getJobs()
    // .subscribe(data => {
    //   this.items = data
    //   console.log(this.items)

    // });
  }

  
    // getJobs(): Observable<Ijobs[]>{
    //   this.http.get('http://10.10.32.82:8080/Company/alldata').subscribe(res => {
    //    // console.log(res)

    //   })

    
    //   return this.http.get<Ijobs[]>(this.router.getCurrentNavigation().extras.state.example);
    // }

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

   this.router.navigate(['CandidateProfileComponent'],{ state: {example :this.person} });
    
  }
  // updateFilter(){
  //   this.param.city= this.filterForm.get('city').value
  //   this.param.jobTime=this.filterForm.get('workingHours').value
  //   this.param.gender=this.filterForm.get('genderToJob').value
  //   this.http.get('http://10.10.32.82:8080/Job/Show', {
  //     params:this.param,
  //     observe: 'response'
  //   })
  //   .toPromise()
  //   .then(response => {
  //     console.log("ewewewwewewewewe",response.body)
  //     this.jobs= response.body
  //    //console.log(response);
  //   //console.log("test1",this.jobs)
 
  //   })
   
  //   .catch(console.log);
  //   console.log("whaaaaaaaaaaaaaaaaaaaat",this.jobs)

  // }


  

}
