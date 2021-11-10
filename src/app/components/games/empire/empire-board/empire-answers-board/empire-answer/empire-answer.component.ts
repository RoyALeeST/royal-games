import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service';
import { playSound } from 'src/app/utils/utilities';

@Component({
  selector: 'royal-empire-answer',
  templateUrl: './empire-answer.component.html',
  styleUrls: ['./empire-answer.component.scss'],
  providers:[SocketService]
})
export class EmpireAnswerComponent implements OnInit {

  @Input() answerData;
  @Input() answerId;
  status: boolean = false;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.listen("empireSaysAnswer").subscribe(
      (data: any)=>{
        if(data.answerData.answer == this.answerData.answer){
          this.status = !this.status;
          playSound("assets/sounds/empire_says_correct_answer_sfx.mp3");
        }
      }
    );
  }
}
