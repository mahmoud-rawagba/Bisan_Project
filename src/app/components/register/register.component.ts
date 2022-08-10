import { CompanyUser } from './../../company-user';
import { Component,  OnInit } from '@angular/core';
import {NgZone} from '@angular/core';

import { FormArray, FormControl, FormGroup,  Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'

import { CustomValidators } from '../../custom-validators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



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
  Locations = [];
  City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
  chosenCities: any = [];
  Gender: any = ['Male','Female',"Other"];
  Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];

      constructor(private ngZone: NgZone, private http: HttpClient,
        private router: Router) {
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
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required]),
        phone: new FormControl(null),
    
       
        firstname: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        city: new FormControl(null),
        intrest: new FormControl(this.Intrests),
        degree: new FormControl(null),
        gender: new FormControl(null),
        canddescription : new FormControl(''),
  
    
        cities: new FormControl(null),
        location :new FormControl(this.Locations),
        compdescription: new FormControl(""),
        fax: new FormControl(null),
        tax: new FormControl(null),
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

this.router.navigate(['jobs']);

    // localStorage.setItem('MyUser', JSON.stringify(this.companyForm.value) );
     // {{companyModel | json}}
      //localStorage.setItem('MyUser', JSON.stringify(this.companyModel) );
    }
  }

