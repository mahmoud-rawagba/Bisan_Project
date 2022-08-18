import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  job_id;
  jobDes;
  constructor(private router:Router, private http:HttpClient) {
   this.job_id= this.router.getCurrentNavigation().extras.state.example
   }

  ngOnInit(): void {
    

    this.http.get('http://10.10.32.82:8080/Job/Show', {
      params:this.job_id,
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log("ewewewwewewewewe",response.body)
      this.jobDes= response.body;
     //console.log(response);
    //console.log("test1",this.jobs)
 
    })
   
    .catch(console.log);
  }

  items = [
    { 
      header: 'Job1', 
      companyName:'company#1',
      content:"A business how a company will reach those goals, and when these goals will be realized. And while there are many sections of a business plan, a well-written business description is one of the most important parts. However, some small business owners may not know how to write an effective business description. Luckily, theres an easy formula to follow along with a few tips for writing an impactful business description  business description is a high-level overview of your company that you include in your business plan Your business description should entice readers—like lenders and investors—to look through the rest of your business plan to learn more about your company Business descriptions should be concise, error-free, and include only pertinent information about your company Most successful businesses have one thing in common—they all have a buttoned-up business plan. It lays out the goals of the company, how a company will reach those goals, and when these goals will be realized. And while there are many sections of a business plan, a well-written business description is one of the most important parts. However, some small business owners may not know how to write an effective business description. Luckily, theres an easy formula to follow along with a few tips for writing an impactful business description  business description is a high-level overview of your company that you include in your business plan Your business description should entice readers—like lenders and investors—to look through the rest of your business plan to learn more about your company Business descriptions should be concise, error-free, and include only pertinent information about your company Most successful businesses have one thing in common—they all have a buttoned-up business plan. It lays out the goals of the company, how a company will reach those goals, and when these goals will be realized. And while there are many sections of a business plan, a well-written business description is one of the most important parts. However, some small business owners may not know how to write an effective business description. Luckily, theres an easy formula to follow along with a few tips for writing an impactful business description  business description is a high-level overview of your company that you include in your business plan Your business description should entice readers—like lenders and investors—to look through the rest of your business plan to learn more about your company Business descriptions should be concise, error-free, and include only pertinent information about your company Most successful businesses have one thing in common—they all have a buttoned-up business plan. It lays out the goals of the company, how a company will reach those goals, and when these goals will be realized. And while there are many sections of a business plan, a well-written business description is one of the most important parts. However, some small business owners may not know how to write an effective business description. Luckily, theres an easy formula to follow along with a few tips for writing an",
      city: 'Ramallah',
      jobTitle: 'Driver',
    }]
}
