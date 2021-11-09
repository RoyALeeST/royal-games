import { Component, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';

@Component({
  selector: 'royal-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['./empire.component.scss']
})
export class EmpireComponent implements OnInit {

  currQuestion: EmpireSaysQuestion;

  constructor(private empireSaysService: EmpireSaysService) { }

  ngOnInit(): void {
    this.empireSaysService.getQuestionByDifficulty().subscribe(
      (questionData: EmpireSaysQuestion) => {
        this.currQuestion = questionData;
        console.log(questionData);
      }
    );
  }

}
