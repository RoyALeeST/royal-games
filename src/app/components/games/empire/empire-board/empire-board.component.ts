import { Component, Input, OnInit } from '@angular/core';
import { shuffle } from 'src/app/utils/utilities';

@Component({
  selector: 'royal-empire-board',
  templateUrl: './empire-board.component.html',
  styleUrls: ['./empire-board.component.scss']
})
export class EmpireBoardComponent implements OnInit {

  @Input() questionData;

  constructor() { }

  ngOnInit(): void {
  }

}
