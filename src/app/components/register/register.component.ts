import { Component, Directive, HostListener, OnInit } from '@angular/core';
import {NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { CustomValidators } from '../../custom-validators';
import { HttpClient } from '@angular/common/http';
/*to be used
import { AngularFileUploaderModule } from "angular-file-uploader";

*/


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

      constructor(private ngZone: NgZone, private http: HttpClient) {
      }

      fileName = '';

    /***************************switch between candidate and company */

    selected = "Company"

    onChangeToggle(val){
      console.log(val);
      
    }
    /***************************switch between candidate and company */
    company = true;
    candidate= false;
    always = true;

    toggleVisibilityCompany(){
    this.company= true;
    this.candidate=false;
    }
    toggleVisibilityCandidate(){
      this.company= false;
      this.candidate=true;
    }
    index_Intrests=0;
    index_Location=0;

      /********************** */
      Intrests = [];
      Locations = [];
      addLocation(newLocation: string) {
        if (newLocation) {
          this.index_Location++;
          this.Locations.push(newLocation);
        
        }
      }


      deleteLocation() {
        
          this.Locations.pop();
          this.index_Location--;
    
      }


      addIntrest(newIntrest: string) {
        if (newIntrest) {
          this.index_Intrests++;
          this.Intrests.push(newIntrest);
        
        }
      }


      form: FormGroup = new FormGroup({});
      registerForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        username: new FormControl(null, [Validators.required]),
        firstname: new FormControl(null, [Validators.required]),
        lastname: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirm: new FormControl(null, [Validators.required]),
        
      },
      // add custom Validators to the form, to make sure that password and passwordConfirm are equal
      { validators: CustomValidators.passwordsMatching }
    )
      City: any =['Ramallah','Jerusalem','Jericho','Hebron','Betlahem','Nablus','Jenin','Tulkarem','Salfeit','Gaza','Khanyonis','der_albalah','Rafah'];
      chosenCities: any = [];
      Gender: any = ['Male','Female',"Other"];
      Degree: any = ['High School','deploma','Bachelor','Master','Phd','None'];
      
      
      
    onCommentChange() {
      console.log(this.commentFC.value);
    } 

    commentFC = new FormControl('', [
      Validators.required, 
      Validators.maxLength(30),
      Validators.email
    ]); 

      ngOnInit() {
      }

      @ViewChild('autosize') autosize: CdkTextareaAutosize;
      triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
      }
      upload(event:Event){
        console.log(event)
    }
    register() { }
    get f(){
      return this.form.controls;
    }

    fileChange(e){
      console.log(e)
    }


}