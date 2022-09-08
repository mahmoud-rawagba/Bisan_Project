import { UploadService } from './../../service/upload.service';
import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';

import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common';

import { CustomValidators } from '../../custom-validators';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/service/candidate.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  service: any;
  loc = false;
  fileName = '';
  selected = "Company";
  selectedCity: String;
  company = true;
  candidate = false;
  description = '';
  Intrests = [];
  intrestsString = '';
  Locations = [];
  City: any = [
    'Ramallah',
    'Jerusalem',
    'Jericho',
    'Hebron',
    'Betlahem',
    'Nablus',
    'Jenin',
    'Tulkarem',
    'Salfeit',
    'Gaza',
    'Khanyonis',
    'der_albalah',
    'Rafah',
  ];
  chosenCities: any = [];
  Gender: any = ['Male', 'Female'];
  Degree: any = ['High School', 'deploma', 'Bachelor', 'Master', 'Phd', 'None'];
  cvPath: any;
  picPath: any;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  param;
  selectedCV: any;
  selectedPic: any;
  constructor(
    private ngZone: NgZone,
    private http: HttpClient,
    private router: Router,
    private candidateService: CandidateService,
    private datePipe: DatePipe,
    private uploadService: UploadService,
  ) {
    this.param = JSON.parse(sessionStorage.getItem('userInfo'));
  }

  ngOnInit() {}
  /***************************switch between candidate and company */

  toggleVisibilityCompany() {
    this.company = true;
    this.candidate = false;
    this.selected = 'company';
  }
  toggleVisibilityCandidate() {
    this.company = false;
    this.candidate = true;
    this.selected = 'candidate';
  }

  addLocation(newLocation: string) {
    if (newLocation) {
      this.Locations.push(newLocation);
    }
  }
  addCity(newCity: string) {
    if (newCity) {
      this.chosenCities.push(newCity);
    }
  }

  public fields: Object = { text: 'text', iconCss: 'icon' };

addIntrest(newIntrest: string) {
    if (newIntrest) {
      this.Intrests.push(newIntrest);
    }
    return this.Intrests;
  }

  registerForm = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      companyName: new FormControl(null),
      username: new FormControl(null, [Validators.required]),
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      passwordConfirm: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),

      fullName: new FormControl(null, [Validators.required]),

      city: new FormControl(null, [Validators.required]),
      field: new FormControl(null, [Validators.required]),
      intrest: new FormControl([]),
      studyDegree: new FormControl(null),
      gender: new FormControl(null, [Validators.required]),
      canddescription: new FormControl(''),
      dateOfBirth: new FormControl('', [Validators.required]),
      picPath: new FormControl(),
      cvPath: new FormControl(),

      cities: new FormControl(null),
      location: new FormControl(this.Locations),
      compdescription: new FormControl(''),
      fax: new FormControl(null),
      tax: new FormControl(null),
      address: new FormControl(),

    },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  );

  upload(event: Event) {
    console.log(event.target['files'][0]);
    this.selectedCV = event.target['files'][0].name;
  }

  private updateFile(event: Event, formControlName: string){
    console.log("event.target", event.target)
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.controls[formControlName].patchValue([file]);
    this.registerForm.get(formControlName).updateValueAndValidity()
  }

  fileChange(event, type) {
    console.log("selected", event.target.files);

    if(type == 'cv') {
      this.selectedCV = event.target.files.item(0);
      this.registerForm.controls.cvPath.setValue(event.target.files.item(0))
    } else {
      this.selectedPic = event.target.files.item(0);
      this.registerForm.controls.picPath.setValue(event.target.files.item(0))
    }
    // this.uploadService.pushFileToStorage(event.target.files.item(0)).subscribe(event => {
    //  });

    // let fileList: FileList = event.target.files;
    // if (fileList.length > 0) {
    //   let file: File = fileList[0];
    //   let formData: FormData = new FormData();
    //   formData.append('uploadFile', file, file.name);

    //   console.log("formData", formData);

      // let headers = new HttpHeaders();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      // headers.append('Content-Type', 'multipart/form-data');
      // headers.append('Accept', 'application/json');
      // let options = { headers: headers };
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //     .pipe(catchError((error) => {throw error;}))
      //     .subscribe(
      //         data => console.log('success'),
      //         error => console.log(error)
      //     )
    // }
  }
  register() {}

  deleteLocations(index) {
    this.Locations.splice(index, 1);
  }
  deleteIntrest(intrestIndex) {
    this.Intrests.splice(intrestIndex, 1);
  }

  addUser(): void {
    let x = this.registerForm.value;
    console.log(
      Object.keys(this.registerForm.value).filter(
        (item) =>
          this.registerForm.value[item] !== null &&
          this.registerForm.value[item] !== ''
      )
    );
  }
  submit() {
    this.registerForm.value['intrest'] = this.Intrests.join();
    this.registerForm.value['dateOfBirth'] = this.datePipe.transform(
      this.registerForm.value['dateOfBirth'],
      'dd-MM-yyyy'
    );
    this.registerForm.value['cvPath'] = this.selectedCV;
    this.registerForm.value['cvPath'] = this.selectedCV;


    console.log(this.registerForm.value);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }),
    };

    console.log(this.selected);
    if (this.selected == 'company') {
      this.http
        .post<any>(
          'http://10.10.32.82:8080/Company/register',
          this.registerForm.value,
          httpOptions
        )
        .subscribe((res) => {
          console.log(res);

          console.log('hahahahahaha');
          console.log(res);
          if (res == true) {
            this.router.navigate(['login']);
          } else {
            window.alert('error in registration');
          }
        });
    } else if (this.selected == 'candidate') {
      console.log("this.registerForm.value", this.registerForm.value);

      const data: FormData = new FormData();

      data.append('cvPath', this.registerForm.value.cvPath);
      data.append('picPath', this.registerForm.value.picPath);
      data.append('username', this.registerForm.value.username);
      data.append('email', this.registerForm.value.email);
      data.append('phone', this.registerForm.value.phone);
      data.append('field', this.registerForm.value.field);
      data.append('studyDegree', this.registerForm.value.studyDegree);
      data.append('gender', this.registerForm.value.gender);
      data.append('password', this.registerForm.value.password);
      data.append('dateOfBirth', this.registerForm.value.dateOfBirth);
      data.append('canddescription', this.registerForm.value.canddescription);
      data.append('fullName', this.registerForm.value.fullName);
      data.append('intrest', this.registerForm.value.intrest);
      data.append('city', this.registerForm.value.city);


      const newRequest = new HttpRequest('POST', 'http://10.10.32.82:8080/Person/register', data, {
        reportProgress: true,
        });
        this.http.request(newRequest)
        .subscribe((res) => {
          console.log('nnnnnnnnnnnnnnnn');
          console.log(res);
          if (res) {
            this.router.navigate(['login']);
          } else {
            window.alert('error in registration');
          }
        });
    }
  }

  response() {
  }
}
