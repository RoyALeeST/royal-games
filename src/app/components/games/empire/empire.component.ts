import { Component, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { Player } from 'src/app/models/player/player.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'royal-empire',
  templateUrl: './empire.component.html',
  styleUrls: ['./empire.component.scss']
})
export class EmpireComponent implements OnInit {

  currQuestion: EmpireSaysQuestion;
  usersData: Player[];

  constructor(private empireSaysService: EmpireSaysService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.listen("newEmpireSaysQuestionRequested").subscribe(
      (questionData: EmpireSaysQuestion)=>{
        this.currQuestion = questionData;
      }
    );

    

    this.usersData = this.empireSaysService.getUsersData();

  }

}
