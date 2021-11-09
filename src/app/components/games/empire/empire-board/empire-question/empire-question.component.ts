import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-empire-question',
  templateUrl: './empire-question.component.html',
  styleUrls: ['./empire-question.component.scss']
})
export class EmpireQuestionComponent implements OnInit {

  @Input() question;
  
  constructor() { }

  ngOnInit(): void {
  }

}
