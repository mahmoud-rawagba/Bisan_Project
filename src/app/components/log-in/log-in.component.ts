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

    userName: new FormControl('tartir', [Validators.required]),
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


    if(res!=1){
      if(res.type){
      this.obj = {
        gender: res.gender,
        city:  res.city.cityName,
        studyDegree:  res.studyDegree,
        personField: res.personField,
        personID: res.personID
      }
     // this.person =   res
      this.para=JSON.parse(JSON.stringify(this.obj)),
      this.type = res.type
      this.router.navigate(['jobs'], { state: {example :this.para,userInfo:res, loginF:this.loginForm.value } });
      console.log("userInfo",res, JSON.stringify(res))
      sessionStorage.setItem('userInfo', JSON.stringify(res))
      sessionStorage.setItem('example', JSON.stringify(this.para))
      sessionStorage.setItem('loginF', JSON.stringify(this.loginForm.value))




      }




    else{
      console.log(res)
      console.log("No Companies Yet!")
      this.router.navigate(['jobs']);
      sessionStorage.setItem('userInfo', JSON.stringify(res))
      sessionStorage.setItem('example', JSON.stringify(this.para))
      sessionStorage.setItem('loginF', JSON.stringify(this.loginForm.value))
    }
  }else{
    window.alert("user not found Or Wrong Password");
  }

  })


  }

  ngOnInit(): void {

  }


}
