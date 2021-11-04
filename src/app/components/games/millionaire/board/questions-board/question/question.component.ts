import { Component, Input, OnInit } from '@angular/core';
import { AnswerTypesEnum } from 'src/app/models/Enums/AnswerTypesEnum.model';

@Component({
  selector: 'royal-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  @Input() question:any;
  @Input() questionType:any;
  @Input() questionImgUrl:any;
  eAnswerTypesEnum = AnswerTypesEnum;

  constructor() { }

  ngOnInit(): void {
  }
}
