import { Component, Input, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { Player } from 'src/app/models/player/player.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';

@Component({
  selector: 'royal-admin-empire-board',
  templateUrl: './admin-empire-board.component.html',
  styleUrls: ['./admin-empire-board.component.scss']
})
export class AdminEmpireBoardComponent implements OnInit {

  @Input() questionData;
  @Input() usersData: Player[];
  
  constructor(private empireSaysService: EmpireSaysService) { }

  ngOnInit(): void {
  }

  requestNextQuestion(){
    this.empireSaysService.getQuestionByDifficulty().subscribe(
      (questionData: EmpireSaysQuestion) => {
        this.questionData = questionData;
      }
    );
  }

  emitWrongAnswer(userId: number){
    this.empireSaysService.emitWrongAnswer(userId);
  }

  addPointsToPlayer(playerToAddPoints: Player){
    this.empireSaysService.addScoreToPlayer(playerToAddPoints.playerNumber);
  }

  resetGame(){
    this.empireSaysService.resetGame();
    this.requestNextQuestion();
  }

  showIncorrectAnswerBuzzer(){
    this.empireSaysService.showIncorrectAnswerBuzzer();
  }

  revealQuestion(){
    this.empireSaysService.revealQestionToPlayer();
  }
}
