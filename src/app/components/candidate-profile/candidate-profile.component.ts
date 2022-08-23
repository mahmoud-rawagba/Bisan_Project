import { Iprofile } from './../../candProfile';
import { CandidateService } from './../../service/candidate.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  profileDetails: Iprofile;
loginF:{};
     
      

  constructor(private ngZone: NgZone, 
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private acc: CandidateService,
    

    ) {
      this.profileDetails=this.router.getCurrentNavigation().extras.state.example
      this.loginF =  this.router.getCurrentNavigation().extras.state.loginF
      //1--------the names of fields are not the same between cand. and comp. objects until then used if statement to solve an error this should be temp.
      if(this.router.getCurrentNavigation().extras.state.example.type == "person"){
      this.profileDetails.city= this.router.getCurrentNavigation().extras.state.example.city.cityName
      }
     
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
  obj:{}
  para:{}





  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  home(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      })
    };

    this.http.post<any>('http://10.10.32.82:8080/login', this.loginF, httpOptions).subscribe(res =>{
      if(res!=null){
        if(res.type == "person"){
          this.obj = {
            gender: res.gender,
            city:  res.city.cityName,
            studyDegree:  res.studyDegree,
            personField: res.personField
          }
          this.para=JSON.parse(JSON.stringify(this.obj)),
          //this.type = res.type
          this.router.navigate(['jobs'], { state: {example :this.para,userInfo:res, loginF:this.loginF} });
        }

      }
      else{
        console.log("No Companies Yet!")
        this.router.navigate(['jobs'], { state: {userInfo:res} });
      }
    })
  }
}
   


  
  

  

