import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'royal-answer-image',
  templateUrl: './answer-image.component.html',
  styleUrls: ['./answer-image.component.scss']
})
export class AnswerImageComponent implements OnInit, OnChanges, OnDestroy {

  @Input() isAnswerCorrect: boolean;

  imgUrl: string = ""
  constructor() { }



  ngOnChanges(changes: SimpleChanges): void {
    if(this.isAnswerCorrect){
      this.imgUrl = 'assets/images/gifs/pepe_answer_reveal_correct.gif';
    } else {
      this.imgUrl = 'assets/images/gifs/pepe_answer_reveal_incorrect.gif';
    }
  }

  ngOnInit(): void {
  }

  doSomething(){
    console.log("loaded")
  }

  ngOnDestroy(): void {
    this.imgUrl="";
    console.log("image hidden and component destroyed")
  }
}
