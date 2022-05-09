import { Component, OnInit } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'royal-admin-millionaire',
  templateUrl: './admin-millionaire.component.html',
  styleUrls: ['./admin-millionaire.component.scss']
})
export class AdminMillionaireComponent implements OnInit {

  playerUsername: string;

  constructor(private millionaireService: MillionaireQuestionsService, 
              private socketService: SocketService) { 
  }

  ngOnInit(): void {
  }

  notifyPlayerUsernameChanged(){
    console.log(this.playerUsername)
    this.millionaireService.announceNewPlayer(this.playerUsername);
    this.socketService.emit("millionaire_newPlayer",this.playerUsername);

  }

}
