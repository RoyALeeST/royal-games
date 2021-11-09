import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-admin-empire-answers-board',
  templateUrl: './admin-empire-answers-board.component.html',
  styleUrls: ['./admin-empire-answers-board.component.scss']
})
export class AdminEmpireAnswersBoardComponent implements OnInit {

  @Input() answers;

  constructor() { }

  ngOnInit(): void {
  }

}
