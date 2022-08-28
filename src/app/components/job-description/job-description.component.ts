
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
 
  job_id;
  apps:{
  }

  jobDes:{
  };
 
  type;
  param:{
    id;
    jobID;
  };
  id;
status;
applied
  constructor(private router:Router, private http:HttpClient) {
    this.type = this.router.getCurrentNavigation().extras.state.type
 
      this.job_id= this.router.getCurrentNavigation().extras.state.example

      this.id = this.router.getCurrentNavigation().extras.state.id




   this.param={
    id:this.id,
    jobID: this.job_id
   }
   this.param=JSON.parse(JSON.stringify(this.param))


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


}


