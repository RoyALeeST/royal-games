import { Component, OnInit } from '@angular/core';
import { EmpireSaysQuestion } from 'src/app/models/games/empireSays.model';
import { Player } from 'src/app/models/player/player.model';
import { EmpireSaysService } from 'src/app/services/games/empireSays.service';
import { SocketService } from 'src/app/shared/services/socket.service';

@Component({
  selector: 'royal-admin-empire',
  templateUrl: './admin-empire.component.html',
  styleUrls: ['./admin-empire.component.scss']
})
export class AdminEmpireComponent implements OnInit {

  currQuestion: EmpireSaysQuestion;
  usersData: Player[];

  constructor(private empireSaysService: EmpireSaysService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.empireSaysService.getQuestionByDifficulty().subscribe(
      (questionData: EmpireSaysQuestion) => {
        this.currQuestion = questionData;
      }
    );

    this.socketService.listen("gameReset").subscribe(
      ()=>{
        this.usersData = this.empireSaysService.getUsersData();
      }
    )

    this.usersData = this.empireSaysService.getUsersData();
  }

}
