import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  personId;
  apps:{};
  approved;
  app=[];
  loginF:{};
  i=0;
  showFiller = false;

  constructor(private ngZone: NgZone, private http:HttpClient,
    private router: Router) { 
      this.personId = this.router.getCurrentNavigation().extras.state.id
      this.loginF =  this.router.getCurrentNavigation().extras.state.loginF

    }

  ngOnInit(): void {
   


    this.http.get('http://10.10.32.82:8080/Person/'+this.personId+'/myApplication', {
  
      observe: 'response'
    })
    .toPromise()
    .then(response => {

      this.apps= response.body
      while(this.i< this.apps){
       if( this.apps[this.i].status=="Approved!"){
        this.app[this.i]= true
       }
       else{
        this.app[this.i]= false
       }
       ++this.i;


      }
 
    })
   
    .catch(console.log);

  }


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






}
