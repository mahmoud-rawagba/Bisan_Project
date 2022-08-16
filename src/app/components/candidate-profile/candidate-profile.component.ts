import { profileI } from './../../profile';
import { CandidateService } from 'src/app/service/candidate.service';
import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
  ProfileDetails: profileI;

  constructor(private ngZone: NgZone,
     private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private cand: CandidateService,
    ) { }



  ngOnInit(): void {
  }



  showFiller = false;





  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  
}
