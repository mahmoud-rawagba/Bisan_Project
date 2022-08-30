import { Iprofile } from './../../candProfile';
import { CandidateService } from './../../service/candidate.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  profileDetails: Iprofile;
loginF:{};
today: Date = new Date();
pipe = new DatePipe('en-US');
todayWithPipe = null;
Gender: any = ['Male','Female'];
Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];
City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
type;



  constructor(private ngZone: NgZone,
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private acc: CandidateService,
    private datePipe: DatePipe


    ) {
      this.profileDetails=this.router.getCurrentNavigation().extras.state.example
      this.type = this.router.getCurrentNavigation().extras.state.example.type
      if (this.type){
        this.profileDetails.email=this.router.getCurrentNavigation().extras.state.example.personEmail

      }
      else{
        this.profileDetails.email=this.router.getCurrentNavigation().extras.state.example.companyEmail
        this.profileDetails.userName=this.router.getCurrentNavigation().extras.state.example.companyUserName
        this.profileDetails.company_id= this.router.getCurrentNavigation().extras.state.example.company_id
        this.profileDetails.address=this.router.getCurrentNavigation().extras.state.example.address
        this.profileDetails.cities.cityName=this.router.getCurrentNavigation().extras.state.example.cities.cityName
        this.profileDetails.companyPhone=this.router.getCurrentNavigation().extras.state.example.companyPhone
        this.profileDetails.companyFax=this.router.getCurrentNavigation().extras.state.example.companyFax
        this.profileDetails.companyTax=this.router.getCurrentNavigation().extras.state.example.companyTax
        this.profileDetails.companyDescription=this.router.getCurrentNavigation().extras.state.example.companyDescription
      }
      // this.profileDetails.email=this.router.getCurrentNavigation().extras.state.example.personEmail
      this.profileDetails.field = this.router.getCurrentNavigation().extras.state.example.personField
      this.updatedform.value['field']= this.profileDetails.field
      this.updatedform.value['dateOfBirth']= this.profileDetails.dateOfBirth
      console.log(">>>>>>>>>>>>>>>>>>>>>===",this.profileDetails)
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
  console.log(   "candidaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaate" ,this.profileDetails);
  this.profileDetails.fullName=this.updatedform.get('fullName').value
  this.profileDetails.city=this.updatedform.get('city').value
  this.profileDetails.field=this.updatedform.get('field').value
  this.profileDetails.intrests=this.updatedform.get('intrest').value
  this.profileDetails.studyDegree=this.updatedform.get('studyDegree').value
  this.profileDetails.gender=this.updatedform.get('gender').value
  this.profileDetails.description=this.updatedform.get('canddescription').value
  this.profileDetails.dateOfBirth=this.updatedform.get('dateOfBirth').value
  // this.profileDetails=this.updatedform.get('picPath').value

  console.log("this is param after update>>>>>>>>.",this.para)
    this.http.post('http://10.10.32.82:8080/Person/update', {
      params:this.para,
      observe: 'response'
    })
}


  form: FormGroup = new FormGroup({});
  updatedform = new FormGroup({
    email: new FormControl(''),

    username: new FormControl(null),
    password: new FormControl(null),
    passwordConfirm: new FormControl(null),
    phone: new FormControl(null),


    fullName: new FormControl(''),

    city: new FormControl(),
    field: new FormControl(),
    intrest: new FormControl(),
    studyDegree: new FormControl(),
    gender: new FormControl(),
    canddescription : new FormControl(),
    dateOfBirth: new FormControl(),
    picPath: new FormControl(),
    companyName: new FormControl(),
    fax: new FormControl(),
    tax: new FormControl(),
    compdescription: new FormControl(),
    address: new FormControl(),
    // companyEmail: new FormControl(),

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




