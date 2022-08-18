import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CandidateService} from 'src/app/service/candidate.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private http: HttpClient,
    private candidateService: CandidateService,private router: Router,
    ) { 
   
  }
  form: FormGroup = new FormGroup({});
  loginForm = new FormGroup({

    userName: new FormControl(null, [Validators.required]),
    myPassword: new FormControl(null, [Validators.required]),
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
      console.log(res)
      if(res!=null){
        this.router.navigate(['jobs']);
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
