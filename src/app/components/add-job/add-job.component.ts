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

  constructor(private ngZone: NgZone, 
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private acc: CandidateService,
     private datePipe: DatePipe

  ) { 
    this.companyID=this.router.getCurrentNavigation().extras.state.example

  }

  ngOnInit(): void {
  }
  Gender: any = ['Male','Female'];
  Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];
  showFiller = false;
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
  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  home(){
    this.router.navigate(['jobs']);
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

}
