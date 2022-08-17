import { Iprofile } from './../../candProfile';
import { CandidateService } from './../../service/candidate.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  profileDetails: Iprofile;

     
      

  constructor(private ngZone: NgZone, 
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private acc: CandidateService,
    

    ) {
      this.profileDetails=this.router.getCurrentNavigation().extras.state.example
      this.profileDetails.city= this.router.getCurrentNavigation().extras.state.example.city.cityName
     
     }


  ngOnInit(): void {
    this.http.get('http://10.10.32.82:8080/Person/alldata').subscribe(res => {
      console.log(res)})
  }
update(){
  console.log(   "candidaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate" ,this.profileDetails); 
}
  
/*
  form: FormGroup = new FormGroup({});
  updatedform = new FormGroup({
    email: new FormControl(this.profileDetails.email, [Validators.required, Validators.email]),
   
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    phone: new FormControl(null),

   
    fullName: new FormControl(this.profileDetails.fullName, [Validators.required]),
    
    city: new FormControl(this.profileDetails.city),
    field: new FormControl(this.profileDetails.field),
    intrest: new FormControl(this.profileDetails.intrests),
    studyDegree: new FormControl(this.profileDetails.academicDegree),
    gender: new FormControl(this.profileDetails.gender),
    canddescription : new FormControl(this.profileDetails.candDescription),
    dateOfBirth: new FormControl(this.profileDetails.dateOfBirth),
    picPath: new FormControl(this.profileDetails.picpath),

})*/

  showFiller = false;





  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  home(){
    console.log("it did it")
    this.router.navigate(['jobs']);
   
  }

  
}
