import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'royal-admin-empire-board',
  templateUrl: './admin-empire-board.component.html',
  styleUrls: ['./admin-empire-board.component.scss']
})
export class AdminEmpireBoardComponent implements OnInit {

  @Input() questionData;

  constructor() { }

  ngOnInit(): void {
  }

}
