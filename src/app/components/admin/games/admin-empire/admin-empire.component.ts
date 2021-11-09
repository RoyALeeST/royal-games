import { Component, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';

@Component({
  selector: 'royal-admin-empire',
  templateUrl: './admin-empire.component.html',
  styleUrls: ['./admin-empire.component.scss']
})
export class AdminEmpireComponent implements OnInit {

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
