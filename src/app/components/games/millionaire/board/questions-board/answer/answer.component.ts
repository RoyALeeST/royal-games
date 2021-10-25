import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {


  @Input() answer: string;

  constructor() { }

  ngOnInit(): void {
  }

}
