import { Component, Input, OnInit } from '@angular/core';
import { SocketService } from 'src/app/shared/services/socket.service';

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

  constructor(private socketSercice: SocketService) { }

  ngOnInit(): void {
    this.socketSercice.listen("empireSaysAnswer").subscribe(
      (answerSelected)=>{
        if(answerSelected == this.answerData.answer){
          this.status = !this.status;
        }
      }
    );
  }
}
