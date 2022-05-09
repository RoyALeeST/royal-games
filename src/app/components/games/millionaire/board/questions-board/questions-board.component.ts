import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { SocketService } from 'src/app/shared/services/socket.service';
import { shuffle } from 'src/app/utils/utilities';

@Component({
  selector: 'royal-questions-board',
  templateUrl: './questions-board.component.html',
  styleUrls: ['./questions-board.component.scss']
})
export class QuestionsBoardComponent implements OnInit, OnChanges {

  @Input() questionData: MillionaireQuestion;
  answers: any[];
  imgUrl: string;
  
  private dialogConfig;
  playerUsername: string;
  constructor(private millionaireQuestionsService: MillionaireQuestionsService,
              private socketService: SocketService,
              private errorService: ErrorHandlerService ) { 
                this.dialogConfig = {
                  height: '200px',
                  width: '400px',
                  disableClose: true,
                  data: { }
                }

                this.socketService.listen("millionaire_newPlayer").subscribe(
                  (username: string)=>{
                    if(username != null  && username != this.playerUsername){
                      console.log(username);
                      this.playerUsername = username;
                    }
                  }
                )

                this.socketService.listen("chat_message").subscribe(
                  (msgData: any)=>{
                    console.log(msgData)
                    console.log(this.millionaireQuestionsService.getPlayerUsername());
                    if(msgData.username.toLowerCase() == this.playerUsername){
                      console.log(msgData);
                      console.log(this.millionaireQuestionsService.getCorrectAnswer());
                      this.handleViewerAnswer(msgData.message);

                    }
                  }
                )
              }

  ngOnChanges(changes: SimpleChanges): void {
    this.answers = [this.questionData.correctAnswer, ...this.questionData.invalidAnswers];
    shuffle(this.answers);  
    for (let i = 0; i < this.answers.length; i++) {
      this.answers[i] = {option1: i+1, answer: this.answers[i]}
    }
    console.log(this.answers);
    this.imgUrl = "/assets/images/questions/question/" + this.questionData.questionImgUrl;
  }

  ngOnInit(): void {
    this.millionaireQuestionsService.fiftyLifelineSelected$.subscribe(
      (filteredAnswers) => {
        this.answers = filteredAnswers;
      },
      (error) => {
        this.handleError(error);
      }
    )
  }


  handleViewerAnswer(msgData: any){
    if(msgData == "a" || msgData == "1"){
      this.millionaireQuestionsService.announceAnswerSelected(this.answers[0].answer);
    } else if(msgData == "b" || msgData == "2"){
      this.millionaireQuestionsService.announceAnswerSelected(this.answers[1].answer);
    } else if(msgData == "c" || msgData == "3"){
      this.millionaireQuestionsService.announceAnswerSelected(this.answers[2].answer);
    } else if(msgData == "d" || msgData == "4"){
      this.millionaireQuestionsService.announceAnswerSelected(this.answers[3].answer);
    }
  }
    /***
   * @params {error} error to be displayed to the user
   * @returns void 
   */ 
     handleError(error){
      console.log(error)
      this.errorService.dialogConfig = { ...this.dialogConfig };
      this.errorService.handleError(error);
    }
  
    
  
}
