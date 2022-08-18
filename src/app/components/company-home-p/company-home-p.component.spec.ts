import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyHomePComponent } from './company-home-p.component';

describe('CompanyHomePComponent', () => {
  let component: CompanyHomePComponent;
  let fixture: ComponentFixture<CompanyHomePComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyHomePComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyHomePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
