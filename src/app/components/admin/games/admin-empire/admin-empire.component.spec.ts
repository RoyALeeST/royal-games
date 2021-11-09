import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmpireComponent } from './admin-empire.component';

describe('AdminEmpireComponent', () => {
  let component: AdminEmpireComponent;
  let fixture: ComponentFixture<AdminEmpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmpireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
