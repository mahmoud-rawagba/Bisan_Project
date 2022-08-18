import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-company-home-p',
  templateUrl: './company-home-p.component.html',
  styleUrls: ['./company-home-p.component.css']
})
export class CompanyHomePComponent implements OnInit {
  
  constructor(private http: HttpClient
    
    ) { 
   
  }

  ngOnInit(): void {
  }

}
