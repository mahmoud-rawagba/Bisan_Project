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
     })
  }

update(){
  console.log(   "candidaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate" ,this.updatedform.value);
  this.profileDetails.fullName=this.updatedform.get('fullName').value
  this.profileDetails.city=this.updatedform.get('city').value
  this.profileDetails.personField=this.updatedform.get('field').value
  this.profileDetails.intrests=this.updatedform.get('intrest').value
  this.profileDetails.studyDegree=this.updatedform.get('studyDegree').value
  this.profileDetails.gender=this.updatedform.get('gender').value
  this.profileDetails.description=this.updatedform.get('canddescription').value
  this.profileDetails.dateOfBirth=this.updatedform.get('dateOfBirth').value
  this.profileDetails.dateOfBirth= JSON.parse(JSON.stringify(this.profileDetails.dateOfBirth))
  this.para=this.profileDetails

  console.log("this is param after update>>>>>>>>.",this.para)
    this.http.put('http://10.10.32.82:8080/Person/update', this.para).subscribe(response =>{
      console.log(response)
    })
}


  form: FormGroup = new FormGroup({});
  updatedform = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),

    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required]),
    phone: new FormControl(null),


    fullName: new FormControl('', [Validators.required]),

    city: new FormControl(),
    field: new FormControl(),
    intrest: new FormControl(),
    studyDegree: new FormControl(),
    gender: new FormControl(),
    canddescription : new FormControl(),
    dateOfBirth: new FormControl(),
    picPath: new FormControl(),

})


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

          this.router.navigate(['jobs'], { state: {example :this.para,userInfo:res, loginF:this.loginF} });
        }

      }
      else{

        this.router.navigate(['jobs'], { state: {userInfo:res} });
      }
    })
  }
}




