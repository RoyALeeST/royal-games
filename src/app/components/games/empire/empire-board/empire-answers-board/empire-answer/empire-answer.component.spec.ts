import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireAnswerComponent } from './empire-answer.component';

describe('EmpireAnswerComponent', () => {
  let component: EmpireAnswerComponent;
  let fixture: ComponentFixture<EmpireAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
