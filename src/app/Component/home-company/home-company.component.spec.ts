import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyComponent } from './home-company.component';

describe('HomeCompanyComponent', () => {
  let component: HomeCompanyComponent;
  let fixture: ComponentFixture<HomeCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCompanyComponent]
    });
    fixture = TestBed.createComponent(HomeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
