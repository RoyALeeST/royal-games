import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player/player.model';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'royal-empire-player-score-board',
  templateUrl: './empire-player-score-board.component.html',
  styleUrls: ['./empire-player-score-board.component.scss']
})
export class EmpirePlayerScoreBoardComponent implements OnInit {

  lifeImgUrl: string = "assets/images/gifs/pepe_dance_empire_says_incorrect_answer_score_board.gif"
  @Input() score: number = 0;
  @Input() userData:Player;
  
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.listen("empireSaysWrongAnswerServer").subscribe(
      (playerId) => {
        console.log(playerId);
        if(playerId == this.userData.playerNumber){
          this.userData.lifes.pop();
        }
      }
    );    
  }

}
