import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-empire-answers-board',
  templateUrl: './empire-answers-board.component.html',
  styleUrls: ['./empire-answers-board.component.scss']
})
export class EmpireAnswersBoardComponent implements OnInit {

  @Input() answers;

  constructor() { }

  ngOnInit(): void {
  }

}
