import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppsComponent } from './view-apps.component';

describe('ViewAppsComponent', () => {
  let component: ViewAppsComponent;
  let fixture: ComponentFixture<ViewAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAppsComponent]
    });
    fixture = TestBed.createComponent(ViewAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
