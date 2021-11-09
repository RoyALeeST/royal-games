import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpireAnswerComponent } from './admin-empire-answer.component';

describe('AdminEmpireAnswerComponent', () => {
  let component: AdminEmpireAnswerComponent;
  let fixture: ComponentFixture<AdminEmpireAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpireAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpireAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
