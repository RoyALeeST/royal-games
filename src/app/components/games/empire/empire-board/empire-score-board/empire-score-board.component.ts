import { Component, Input, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { Player } from 'src/app/models/player/player.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'royal-empire-score-board',
  templateUrl: './empire-score-board.component.html',
  styleUrls: ['./empire-score-board.component.scss']
})
export class EmpireScoreBoardComponent implements OnInit {

  lifeImgUrl: string = "assets/images/gifs/pepe_dance_empire_says_incorrect_answer_score_board.gif"
  score: number = 0;
  @Input() usersData: Player[];
  @Input() questionData: any;
  currQuestionText: string;

  constructor(private socketService: SocketService,
              private empireSayService: EmpireSaysService) { }

  ngOnInit(): void {
    this.socketService.listen("empireSaysAnswer").subscribe(
      (data: any)=>{
        if(data.playerId == this.usersData[0].playerNumber){
          this.score += data.answerData.value;
        } else if(data.playerId == this.usersData[1].playerNumber){
          this.score += data.answerData.value;
        }
      }
    );

    this.socketService.listen("addPointsToPlayer").subscribe(
      (playerId) => {
        if(playerId == this.usersData[0].playerNumber){
          this.usersData[0].score += this.score;
        } else if(playerId == this.usersData[1].playerNumber){
          this.usersData[1].score += this.score;
        }
        this.score = 0; // reset after adding to user
      }
    );

    this.socketService.listen("newEmpireSaysQuestionRequested").subscribe(
      (playerId) => {
        this.score = 0; // reset after adding to user
      }
    );

    this.empireSayService.scoreReset$.subscribe(
      ()=>{
        this.score = 0;
      }
    );
  }

}
