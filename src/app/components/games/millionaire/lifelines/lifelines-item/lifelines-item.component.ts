import { Component, Input, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { ComfirmationDialogComponent } from "../../board/dialogs/comfirmation-dialog/comfirmation-dialog.component";

@Component({
  selector: 'royal-lifelines-item',
  templateUrl: './lifelines-item.component.html',
  styleUrls: ['./lifelines-item.component.scss']
})
export class LifelinesItemComponent implements OnInit {

  @Input() lifeline;
  isUsed: boolean = false;

  constructor(  public dialog: MatDialog,
                private millionaireQuestionsService: MillionaireQuestionsService) { }

  ngOnInit(): void {
    this.millionaireQuestionsService.gameReset$.subscribe(
      (data)=>{
        this.isUsed = false;
      },
      (error)=>{

      }
    )
  }

  openDialog(): void {
    if(!this.isUsed){
      if(this.lifeline == "50/50"){
        //TODO: REMOVE 2 ANSWERS
        this.millionaireQuestionsService.announcefiftyLifelineSelected();
      }
      const dialogRef = this.dialog.open(ComfirmationDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
          this.isUsed = result.isUsed;
        });
    }
  }


}
