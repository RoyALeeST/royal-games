import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';

@Component({
  selector: 'royal-answer-image',
  templateUrl: './answer-image.component.html',
  styleUrls: ['./answer-image.component.scss']
})
export class AnswerImageComponent implements OnInit, OnChanges {

  @Input() isAnswerCorrect: boolean;

  imgUrl: string = ""
  correctAnswerImgUrl: string = 'assets/images/gifs/pepe_answer_reveal_correct.gif';
  incorrectAnswerImgUrl: string = 'assets/images/gifs/pepe_answer_reveal_incorrect.gif';
  element: HTMLImageElement = null;
  constructor(private millionaireQuestionsService: MillionaireQuestionsService) { }

  ngOnInit(): void {
    this.millionaireQuestionsService.newQuestionRequested$.subscribe(
      () => {
        this.imgUrl = "";
      }
    );
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.imgUrl = ""
    if(this.isAnswerCorrect){
      this.imgUrl = this.correctAnswerImgUrl;
    } else {
      this.imgUrl = this.incorrectAnswerImgUrl;
    }
    this.imgUrl = this.imgUrl;
  }

  doSomething(){
    console.log("loaded")
  }

}
