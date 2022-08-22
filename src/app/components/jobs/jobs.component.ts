import { Iprofile } from './../../candProfile';
import { Observable } from 'rxjs';
import { Ijobs } from './../../jobs';

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Interfilter} from './../../filter'
import { CustomValidators } from '../../custom-validators';
import { HttpClient } from '@angular/common/http';
import {NgZone} from '@angular/core';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';
import { IFilter } from '@syncfusion/ej2-angular-grids';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  // animations: [
  //   // animation triggers go here
  //   trigger('toggleClick', [     // trigger block
  //   state('true', style({      // final CSS following animation
  //     height: "1500 px"
  //   })),
  //   state('false', style({
      
  //   })),
  //   transition('true => false', animate('1000ms linear')),  // animation timing
  //   transition('false => true', animate('1000ms linear'))
  // ])
  // ]
})

export class JobsComponent implements OnInit {
  jobsList : Ijobs;
  user: Iprofile;
  filterF: Interfilter;
  type;
  param;
   jobs={

   };
  showFiller = false;
public items=[]
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah','Any'];
  Gender: any = ['Male','Female','Any'];
  WorkingHours: any=['FullTime', 'PartTime',"Any"];
 
  public companyName: any;


 private _url: string = "./../assets/data/jobs.json"


 constructor(private ngZone: NgZone, private http:HttpClient,
  private router: Router) {


    this.type =this.router.getCurrentNavigation().extras.state.userInfo.type
    console.log("looooooooooooooooooooook",this.router.getCurrentNavigation().extras.state.userInfo)
    this.user=this.router.getCurrentNavigation().extras.state.userInfo
    if ( this.type == "person"){
    
      this.param=this.router.getCurrentNavigation().extras.state.example
      this.filterF = this.router.getCurrentNavigation().extras.state.example
      // this.filterForm.value['city'] =this.param.city;
      // this.filterForm.value['gender'] =this.param.gender;
      // this.filterForm.value['personField'] =this.param.PersonField;
      // this.filterForm.value['studyDegree'] = this.param.studyDegree;
     
     
    }
    console.log(">>>>>>>>>><<<>>><<<>><><><><><<>>",this.param)

    //this.filterForm.value['workingHours'] ="Any";

    
   //this.jobsList.city= this.router.getCurrentNavigation().extras.state.example.companyID.cities.cityName;
    //this.jobsList.companyName= this.router.getCurrentNavigation().extras.state.example.companyID.companyName;
   //console.log(   "prrrrrrrrrrrrrrrrrrrrrrrrrra" ,this.router.getCurrentNavigation().extras.state.example); 
   }


  ngOnInit(): void {
if(this.type == "person"){
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>> ",this.param,"<<<<<<<<<<<<<<<<<<<<<<<<<<")
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
    

  }
  else{
    this.http.get('http://10.10.32.82:8080/Company/'+this.user.company_id+'/showJobs', {
     // params:  JSON.parse(JSON.stringify(this.user.companyID)),
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
   

  }

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
    city: new FormControl(),
    studyDegree: new FormControl(),
    personField: new FormControl(),
    gender: new FormControl(),
  })

  filter(){
    
    this.filterF.city = this.filterForm.get('city').value
    this.filterF.gender = this.filterForm.get('gender').value
 
    this.param=this.filterF;
    console.log("this is param after update>>>>>>>>.",this.param)
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


  }
  
  goToDescribe(JobId){
    this.router.navigate(['JobDescriptionComponent'], {state : {example:JobId}});
  }
  account(){

   this.router.navigate(['CandidateProfileComponent'],{ state: {example :this.user} });
    
  }
  updateFilter(){
    this.param=this.filterForm;
    // this.param.city= this.filterForm.get('city').value
    // this.param.jobTime=this.filterForm.get('workingHours').value
    // this.param.gender=this.filterForm.get('genderToJob').value
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
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+this.param)
  }
  addJob(){
    this.router.navigate(['AddJob'], {state : {example:this.user.company_id}});

  }
  // isGreen: string = 'true';
  // toggleIsCorrect() {
  //   this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value
  // }
  

}
