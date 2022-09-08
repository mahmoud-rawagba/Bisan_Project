import { UploadService } from './../../service/upload.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from 'src/app/service/candidate.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent} from './register.component';
import { NgZone } from '@angular/core';
import { DatePipe } from '@angular/common';


// describe('RegisterComponent', () => {
//   let component: RegisterComponent;
//   let fixture: ComponentFixture<RegisterComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ RegisterComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RegisterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


describe('addIntrest', ()=>{
  it('should add intrest',()=>{
    var ngzone:NgZone
    var http:HttpClient
    var router:Router
    var candidatservices:CandidateService
    var datePipe:DatePipe
    var uploadService:UploadService

    let component= new RegisterComponent(ngzone,http,router,candidatservices,datePipe,uploadService);

    const result =component.addIntrest('one')
    expect(result).toContain('one')
  })
})