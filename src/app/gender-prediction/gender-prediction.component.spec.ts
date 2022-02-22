import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderPredictionComponent } from './gender-prediction.component';

describe('GenderPredictionComponent', () => {
  let component: GenderPredictionComponent;
  let fixture: ComponentFixture<GenderPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
