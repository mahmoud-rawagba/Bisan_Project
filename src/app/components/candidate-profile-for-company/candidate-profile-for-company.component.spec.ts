import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileForCompanyComponent } from './candidate-profile-for-company.component';

describe('CandidateProfileForCompanyComponent', () => {
  let component: CandidateProfileForCompanyComponent;
  let fixture: ComponentFixture<CandidateProfileForCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateProfileForCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileForCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
