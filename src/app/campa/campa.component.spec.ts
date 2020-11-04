import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaComponent } from './campa.component';

describe('CampaComponent', () => {
  let component: CampaComponent;
  let fixture: ComponentFixture<CampaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
