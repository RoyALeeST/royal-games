import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-questions-board',
  templateUrl: './questions-board.component.html',
  styleUrls: ['./questions-board.component.scss']
})
export class QuestionsBoardComponent implements OnInit {

  @Input() question: any;
  @Input() answers: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
