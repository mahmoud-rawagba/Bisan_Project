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


  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
  Gender: any = ['Male','Female',"Other"];
  WorkingHours: any=['FullTime', 'PartTime'];
  items = [
  { 
    header: 'Job1', 
    companyName:'company#1',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla ' ,
    city: 'Ramallah',
    jobTitle: 'Driver',
  },
  { 
    header: 'Job2', 
    companyName:'company#2',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla .',
    city: 'Ramallah',
    jobTitle: 'Driver',
  },
  { 
    header: 'Job3', 
    companyName:'company#3',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla .' ,
    city: 'Ramallah',
    jobTitle: 'Driver',
  },

  ]
  public companyName: any;
 
  constructor(private ngZone: NgZone, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
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

}
