
import { Component,  OnInit } from '@angular/core';
import {NgZone} from '@angular/core';

import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { DatePipe } from '@angular/common';

import { CustomValidators } from '../../custom-validators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/service/candidate.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  service: any;
  loc = false;
  fileName = '';
  selected = "Company";
  selectedCity: String;
  company = true;
  candidate= false;
  description= '';
  Intrests = [];
  intrestsString='';
  Locations = [];
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
  chosenCities: any = [];
  Gender: any = ['Male','Female',"Other"];
  Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];
 
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;


      constructor(private ngZone: NgZone, private http: HttpClient,
        private router: Router,private candidateService: CandidateService, private datePipe: DatePipe) {
      }


      ngOnInit() {
       
      }
    /***************************switch between candidate and company */

    toggleVisibilityCompany(){
    this.company= true;
    this.candidate=false;
    }
    toggleVisibilityCandidate(){
      this.company= false;
      this.candidate=true;
    }

      
      addLocation(newLocation: string) {
        if (newLocation) {
          
          this.Locations.push(newLocation);
        
        }
      }
      addCity(newCity: string){
        if(newCity){
          this.chosenCities.push(newCity);
        }
      }
      
      public fields: Object = {text: "text", iconCss: "icon" };
      
      addIntrest(newIntrest: string) {
        if (newIntrest) {
          
          this.Intrests.push(newIntrest);
         
          
        
        }
       
      }
    

      form: FormGroup = new FormGroup({});
      registerForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        companyName: new FormControl(null),
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required]),
        phone: new FormControl(null),
    
       
        fullName: new FormControl(null, [Validators.required]),
        
        city: new FormControl(null),
        field: new FormControl(null),
        intrest: new FormControl([]),
        studyDegree: new FormControl(null),
        gender: new FormControl(null),
        canddescription : new FormControl(''),
        dateOfBirth: new FormControl(''),
        picPath: new FormControl('picpath'),
    
        cities: new FormControl(null),
        location :new FormControl(this.Locations),
        compdescription: new FormControl(""),
        fax: new FormControl(null),
        tax: new FormControl(null),
        address: new FormControl(),
    },
      // add custom Validators to the form, to make sure that password and passwordConfirm are equal
     {validators: CustomValidators.passwordsMatching }
     )

      upload(event:Event){
        console.log(event)
    }
    register() { }
    get f(){
      return this.form.controls;
    }

    fileChange(e){
      console.log(e)
    }

    deleteLocations(index){
      this.Locations.splice(index,1)
    }
    deleteIntrest(intrestIndex){
      this.Intrests.splice(intrestIndex,1)
    }
      // {username: value}
    // example {id:1592304983049, title: 'Deadpool', year: 2015}
  
    //companyModel = new CompanyUser('','','',0,'',this.Locations,0,0,'')
    addUser(): void {
     let x = this.registerForm.value
    console.log(Object.keys(this.registerForm.value).filter(item => this.registerForm.value[item] !== null && this.registerForm.value[item] !== ''))



    // localStorage.setItem('MyUser', JSON.stringify(this.companyForm.value) );
     // {{companyModel | json}}
      //localStorage.setItem('MyUser', JSON.stringify(this.companyModel) );
    }
 submit(){
  this.registerForm.value['intrest'] = this.Intrests.join();
  this.registerForm.value['dateOfBirth']= this.datePipe.transform( this.registerForm.value['dateOfBirth'],"dd-MM-yyyy")

  console.log(this.registerForm.value)
  const httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
    })
    
  }
  this.http.post<any>('http://10.10.32.82:8080/Person/register', this.registerForm.value, httpOptions).subscribe(res =>{
    console.log(res)
  })
  this.router.navigate(['jobs']);

  }


  }

