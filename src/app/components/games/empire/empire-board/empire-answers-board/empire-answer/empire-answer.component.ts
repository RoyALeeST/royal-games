import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-empire-answer',
  templateUrl: './empire-answer.component.html',
  styleUrls: ['./empire-answer.component.scss']
})
export class EmpireAnswerComponent implements OnInit {

  @Input() answerData;
  @Input() answerId;
  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  revealAnswer(){
    this.status = !this.status;       
}

}
