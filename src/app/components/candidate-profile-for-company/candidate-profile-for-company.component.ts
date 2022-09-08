import { Iprofile } from './../../candProfile';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-candidate-profile-for-company',
  templateUrl: './candidate-profile-for-company.component.html',
  styleUrls: ['./candidate-profile-for-company.component.css']
})
export class CandidateProfileForCompanyComponent implements OnInit {
id:number;
showFiller:false;

  constructor(private router:Router,
    private http:HttpClient) { 
    this.id= this.router.getCurrentNavigation().extras.state.id


  }
  profileDetails:any=[];
  ngOnInit(): void {
    
    this.http.get('http://10.10.32.82:8080/Person/'+this.id+'/getCand', {

      observe: 'response'
    })
    .subscribe(response=>{
        this.profileDetails=response.body
        // console.log("الله اكبر!!",this.response)
    })


    // this.candform.value['email']=  this.profileDetails.personEmail
   
  }

  
//   form: FormGroup = new FormGroup({});
//   candform = new FormGroup({
//     email: new FormControl(''),

//     username: new FormControl(null),
//     password: new FormControl(null),
//     passwordConfirm: new FormControl(null),
//     phone: new FormControl(null),


//     fullName: new FormControl(''),

//     city: new FormControl(),
//     field: new FormControl(),
//     intrest: new FormControl(),
//     studyDegree: new FormControl(),
//     gender: new FormControl(),
//     canddescription : new FormControl(),
//     dateOfBirth: new FormControl(),
//     picPath: new FormControl(),
//     companyName: new FormControl(),
//     fax: new FormControl(),
//     tax: new FormControl(),
//     compdescription: new FormControl(),
//     address: new FormControl(),
//     // companyEmail: new FormControl(),

// })


}
