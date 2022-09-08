import { Ilogin } from './../../login';
import { Iprofile } from './../../candProfile';

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  showFiller=false
  loginF:Ilogin
  on;
 send;
 sendS:{}
  job_id;
  apps:{
  }

  jobDes:{
  };

  type;
  param:{
    id;
    jobID;
    type;
  };
  id;
status;
applied
user:Iprofile
  constructor(private router:Router, private http:HttpClient) {
    this.type = this.router.getCurrentNavigation().extras.state.type

      this.job_id= this.router.getCurrentNavigation().extras.state.example

      this.id = this.router.getCurrentNavigation().extras.state.id
      this.user = JSON.parse(sessionStorage.getItem('userInfo'));
      this.type = this.user.type;
      // if (this.type== null){
      //   this.type="company"
      // }




   this.param={
    id:this.id,
    jobID: this.job_id,
    type: this.type
   }
   this.param=JSON.parse(JSON.stringify(this.param))
   console.log("<honololoooo>",this.param)


   }

  ngOnInit(): void {



    this.http.get('http://10.10.32.82:8080/Job/ShowDetails', {
      params:this.param,
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response.body,"<<<<<<<<<<<<<")
      this.jobDes= response.body;
      if(response.body[1] == true){
        if(this.type){
        this.applied = true
       if( response.body[2] == ""){
    this.status = "Waiting For A Response"

       }
       else{
        this.status =response.body[2]
       }
      }
      else{
        this.apps = response.body[2]
        console.log("apppppppps",this.apps)

      }

    }

      else{
        this.applied = false
      }



    })

    .catch(console.log);




  }



    apply(){
      console.log(this.param)
      if(this.jobDes[1]==false){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
          })
        };


        this.http.post<any>('http://10.10.32.82:8080/applyToJob/add', this.param, httpOptions).subscribe(res =>{


        })



      }
      this.applied = true
      this.status = "Waiting For A Response"




    }
    response(value,applicationID){

      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json',
        })
      };
      const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

      if (value == 0){
        this.send = "Rejected"
      }
      else{
        this.send = "Approved!"
      }
      const status = this.send

      this.sendS={
        applicationID,
        status

      }
      console.log(this.sendS)


      this.http.put<any>('http://10.10.32.82:8080/applyToJob/update', this.sendS,  {headers})
      .subscribe(data => {
        window.alert(data)

      });


      this.ngOnInit();

    }
    addJob(){


      this.router.navigate(['AddJob'], {state : {example:this.user.company_id}});

    }
     JobList(){
      this.router.navigate(['AppliedJobs'], {state : {id:this.user.personID}});

     }
     account(){

      this.router.navigate(['CandidateProfile'],{ state: {example :this.user, loginF: this.loginF } });

     }
     personAccount(personID){
      this.router.navigate(['CandidateProfileForCompany'],{state: {id:personID}});

     }



}


