import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';
import { SocketService } from 'src/app/shared/services/socket.service';
import { playSound } from 'src/app/utils/utilities';
import { Player } from '../../../../models/player/player.model';

@Component({
  selector: 'royal-empire-board',
  templateUrl: './empire-board.component.html',
  styleUrls: ['./empire-board.component.scss']
})
export class EmpireBoardComponent implements OnInit {

  @Input() questionData;
  imgUrl: string = "assets/images/gifs/pepe_dance_empire_says_incorrect_answer.gif";
  isWrongAnswerImageVisible: boolean = false;
  @Input() usersData: Player[];
  
  constructor(private socketService: SocketService,
              private empireSayService: EmpireSaysService, 
              public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.socketService.listen("empireSaysWrongAnswerServer").subscribe(
      (data) =>{
        this.showWrongAnswerImage();
      }
    );

    this.socketService.listen("buzzerRoundWrongAnswer").subscribe(
      ()=>{
        this.showWrongAnswerImage();
      }
    )

    this.socketService.listen("gameReset").subscribe(
      ()=>{
        this.usersData = this.empireSayService.getUsersData();
      }
    )
  }

  showWrongAnswerImage(){
    this.isWrongAnswerImageVisible = true;
    playSound("assets/sounds/empire_says_wrong_answer_sfx.mp3");
    let self = this;
    setTimeout(function(){
      self.isWrongAnswerImageVisible = false;
    }, 4000);
  }

}
