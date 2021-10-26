import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'royal-lifelines',
  templateUrl: './lifelines.component.html',
  styleUrls: ['./lifelines.component.scss']
})
export class LifelinesComponent implements OnInit {

  lifelines: any[] = [ "50/50", "Llama a un amigo", "Pregunta al chat" ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
