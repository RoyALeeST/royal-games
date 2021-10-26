import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoserDialogComponent } from './loser-dialog.component';

describe('LoserDialogComponent', () => {
  let component: LoserDialogComponent;
  let fixture: ComponentFixture<LoserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoserDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
