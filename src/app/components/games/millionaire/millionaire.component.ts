import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'royal-millionaire',
  templateUrl: './millionaire.component.html',
  styleUrls: ['./millionaire.component.scss']
})
export class MillionaireComponent implements OnInit {

  bgUrl: string = "assets/images/backgrounds/bg_1.gif"
  constructor() { }

  ngOnInit(): void {
  }

}
