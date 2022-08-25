import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CandidateService} from 'src/app/service/candidate.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
   obj = {};
   para;
   person={};
   jobs={};
   type;
public x: any;
  constructor(private http: HttpClient,

    private candidateService: CandidateService,private router: Router,

    ) {

  }
  form: FormGroup = new FormGroup({});
  loginForm = new FormGroup({

    userName: new FormControl('bisan', [Validators.required]),
    myPassword: new FormControl('123', [Validators.required]),
  })
  submit(){
    console.log(this.loginForm.value)
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      })
    };

    this.http.post<any>('http://10.10.32.82:8080/login', this.loginForm.value, httpOptions).subscribe(res =>{

    // console.log(">>>>>>>>>>>>>>>>>>",res)
    if(res!=null){
      if(res.type == "person"){
      this.obj = {
        gender: res.gender,
        city:  res.city.cityName,
        studyDegree:  res.studyDegree,
        personField: res.personField
      }
      this.person =   res
      this.para=JSON.parse(JSON.stringify(this.obj)),
      this.type = res.type
      this.router.navigate(['jobs'], { state: {example :this.para,userInfo:res, loginF:this.loginForm.value } });


    }


      //console.log( "this is the obj",  this.obj)
     // console.log(this.para)


      //console.log("test1",this.jobs)


      //this.router.navigate(['jobs'], { state: {example :this.jobs} });

      // this.http.get('http://10.10.32.82:8080/Job/Show', this.person,httpOptions).subscribe(result=>{

      // })
     // console.log("omaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar",this.obj)

     // this.router.navigate(['jobs', this.obj]);

    else{
      console.log("No Companies Yet!")
      this.router.navigate(['jobs'], { state: {userInfo:res} });
    }
  }else{
    window.alert("user not found");
  }

  })




   /* this.http.get('http://10.10.32.82:8080/Company/alldata').subscribe(res => {
      console.log(res)
    })*/
  }

  ngOnInit(): void {
    // this.http.post<any>
  }
  // this.candidateServices
  // .postLogin(user)
  // .subscribe(hero => this.heroes.push(hero));

}
