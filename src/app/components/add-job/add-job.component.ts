import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/service/candidate.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  showFiller=false
  loginF:{};
  constructor(private ngZone: NgZone, 
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private acc: CandidateService,
     private datePipe: DatePipe

  ) { 
    this.companyID=this.router.getCurrentNavigation().extras.state.example
    this.loginF =  this.router.getCurrentNavigation().extras.state.loginF

  }

  ngOnInit(): void {
  }
  Gender: any = ['Male','Female','any'];
  Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];

  WorkingHours: any=['FullTime', 'PartTime'];
  companyID;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  form: FormGroup = new FormGroup({});
  JobForm = new FormGroup({
    companyID: new FormControl(null),
    jobTitle: new FormControl(null),
    jobField: new FormControl(null),
    endDate: new FormControl(null),
    jobDescription: new FormControl(null),
    studyDegree: new FormControl(null),
    gender: new FormControl(null),
    jobTime: new FormControl(null)

})

obj:{}
para:{}
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
  
  addJob(){
     this.JobForm.value['companyID'] =this.companyID;
   
    this.JobForm.value['endDate']= this.datePipe.transform( this.JobForm.value['endDate'],"dd-MM-yyyy")
    console.log(this.JobForm.value)
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
      })
      
    }
    this.http.post<any>('http://10.10.32.82:8080/Job/add', this.JobForm.value, httpOptions).subscribe(res =>{
 
      if (res == true){
        window.alert("Job was successfully added!")
      }
      else{
        window.alert("ERROR!, Please Solve it Then Try Again")
      }
    })
  }
  account(){

    this.router.navigate(['CandidateProfile'],{ state: {example :JSON.parse(sessionStorage.getItem('userInfo')), loginF: this.loginF } });

  }


}
