import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { playSound } from '../../../../../../utils/utilities';

import { parseGIF, decompressFrames } from 'gifuct-js'



@Component({
  selector: 'royal-answer-reveal-dialog',
  templateUrl: './answer-reveal-dialog.component.html',
  styleUrls: ['./answer-reveal-dialog.component.scss']
})
export class AnswerRevealDialogComponent implements OnInit {

  imgUrl: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
                                                      toggleAnswerImageReveal: boolean, 
                                                      isAnswerCorrect: boolean, 
                                                      imageUrl: string,
                                                      gifDelayInMilliseconds: number
                                                    }) { }

  ngOnInit(): void {
    this.imgUrl = this.data.imageUrl;         
    if(this.data.isAnswerCorrect){
      playSound("assets/sounds/correct_answer_reveal_sfx.mp3")
    } else {
      playSound("assets/sounds/incorrect_answer_reveal_sfx.mp3")
    }
    let self= this;
    setTimeout(function() {
       self.imgUrl = "";
    }, this.data.gifDelayInMilliseconds);
  }

}
