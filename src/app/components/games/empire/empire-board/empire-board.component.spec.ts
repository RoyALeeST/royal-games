import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireBoardComponent } from './empire-board.component';

describe('EmpireBoardComponent', () => {
  let component: EmpireBoardComponent;
  let fixture: ComponentFixture<EmpireBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpireBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
