// import { Iprofile } from './../../candProfile';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-candidate-profile-for-company',
//   templateUrl: './candidate-profile-for-company.component.html',
//   styleUrls: ['./candidate-profile-for-company.component.css']
// })
// export class CandidateProfileForCompanyComponent implements OnInit {
// id:number;
// showFiller:false;
// profileDetails:{
//   city: {cityName:string};

// dateOfBirth: [];
// description: string;
// fullName: string;
// gender: string;
// interests:string;
// personEmail: string;
// personField: string;
// personID: number;
// personPhone: number;
// studyDegree: string;
// type: string;
// userName: string;
// };
//   constructor(private router:Router,
//     private http:HttpClient) { 
//     this.id= this.router.getCurrentNavigation().extras.state.id


//   }

//   ngOnInit(): void {
//     this.http.get('http://10.10.32.82:8080/Person/'+this.id+'/getCand', {

//       observe: 'response'
//     })
//     .toPromise()
//     .then(response => {
//       this.profileDetails.city.cityName=response.body.city.cityName
//     })

//     .catch(console.log);
//   }

// }
