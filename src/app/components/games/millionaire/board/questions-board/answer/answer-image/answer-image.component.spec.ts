import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerImageComponent } from './answer-image.component';

describe('AnswerImageComponent', () => {
  let component: AnswerImageComponent;
  let fixture: ComponentFixture<AnswerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
