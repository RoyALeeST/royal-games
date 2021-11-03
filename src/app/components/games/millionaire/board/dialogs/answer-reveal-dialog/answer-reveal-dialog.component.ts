import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { playSound } from '../../../../../../utils/utilities';

@Component({
  selector: 'royal-answer-reveal-dialog',
  templateUrl: './answer-reveal-dialog.component.html',
  styleUrls: ['./answer-reveal-dialog.component.scss']
})
export class AnswerRevealDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {toggleAnswerImageReveal: boolean, isAnswerCorrect: boolean}) { }

  ngOnInit(): void {
    if(this.data.isAnswerCorrect){
      playSound("assets/sounds/correct_answer_reveal_sfx.mp3")
    } else {
      playSound("assets/sounds/incorrect_answer_reveal_sfx.mp3")
    }
  }

}
