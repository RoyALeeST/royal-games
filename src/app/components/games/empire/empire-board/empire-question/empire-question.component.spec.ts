import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireQuestionComponent } from './empire-question.component';

describe('EmpireQuestionComponent', () => {
  let component: EmpireQuestionComponent;
  let fixture: ComponentFixture<EmpireQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
