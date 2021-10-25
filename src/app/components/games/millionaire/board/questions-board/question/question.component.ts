import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question:any;

  constructor() { }

  ngOnInit(): void {
  }

}
