import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MillionaireComponent } from './millionaire.component';

describe('MillionaireComponent', () => {
  let component: MillionaireComponent;
  let fixture: ComponentFixture<MillionaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MillionaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MillionaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
