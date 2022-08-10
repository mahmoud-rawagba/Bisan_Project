import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  items = [
  { 
    header: 'Job1', 
    companyName:'company#1',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla ' 
  },
  { 
    header: 'Job2', 
    companyName:'company#2',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla .'
  },
  { 
    header: 'Job3', 
    companyName:'company#3',
    content: 'we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla we need a cs eng. to do cs stuff by using technologies you dont know you must have experience of bla bla bla .' 
   },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
