import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpireBoardComponent } from './admin-empire-board.component';

describe('AdminEmpireBoardComponent', () => {
  let component: AdminEmpireBoardComponent;
  let fixture: ComponentFixture<AdminEmpireBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpireBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpireBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
