import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMillionaireComponent } from './admin-millionaire.component';

describe('AdminMillionaireComponent', () => {
  let component: AdminMillionaireComponent;
  let fixture: ComponentFixture<AdminMillionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMillionaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMillionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
