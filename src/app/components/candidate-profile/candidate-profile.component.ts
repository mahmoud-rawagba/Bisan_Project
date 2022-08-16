import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {

  constructor(private ngZone: NgZone, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  showFiller = false;





  account(){
    this.router.navigate(['CandidateProfileComponent']);
  }
  
}
