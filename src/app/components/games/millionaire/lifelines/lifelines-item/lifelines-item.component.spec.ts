import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifelinesItemComponent } from './lifelines-item.component';

describe('LifelinesItemComponent', () => {
  let component: LifelinesItemComponent;
  let fixture: ComponentFixture<LifelinesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifelinesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifelinesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
