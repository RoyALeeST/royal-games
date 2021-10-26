import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';

@Component({
  selector: 'royal-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit, OnChanges {

  @Input() difficulty;

  moneyrewards: any[] = [ {value: "$1,000,000", difficulty: 15} ,
  {value: "$500,000", difficulty: 14} ,
  {value: "$256,000", difficulty: 13} ,
  {value: "$128,000", difficulty: 12} ,
  {value: "$64,000", difficulty: 11} ,
  {value: "$32,000", difficulty: 10} ,
  {value: "$16,000", difficulty: 9} ,
  {value: "$8,000", difficulty: 8} ,
  {value: "$4,000", difficulty: 7} ,
  {value: "$2,000", difficulty: 6} ,
  {value: "$1,000", difficulty: 5} ,
  {value: "$500", difficulty: 4} ,
  {value: "$300", difficulty: 3} ,
  {value: "$200", difficulty: 2} ,
  {value: "100$", difficulty: 1} ,
                        ]
  constructor(private millionaireQuestionsService: MillionaireQuestionsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.difficulty % 5)
  }

  ngOnInit(): void {
    this.millionaireQuestionsService.gameReset$.subscribe(
      (data)=>{
        if(data.difficulty){
          this.difficulty = data.difficulty;
        }
      },
      (error)=>{

      }
    )
  }
}
