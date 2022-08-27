import { Iprofile } from './../../candProfile';
import { CandidateService } from './../../service/candidate.service';
import { FormBuilder } from '@angular/forms';
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
   


  
  

  

