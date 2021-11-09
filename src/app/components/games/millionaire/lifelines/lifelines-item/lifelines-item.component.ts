import { Component, Input, OnInit } from '@angular/core';
import { TransitionCheckState } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MillionaireQuestion } from 'src/app/models/games/millionaireQuestion.model';
import { MillionaireQuestionsService } from 'src/app/services/games/millionaireQuestions.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { ComfirmationDialogComponent } from "../../board/dialogs/comfirmation-dialog/comfirmation-dialog.component";

@Component({
  selector: 'royal-lifelines-item',
  templateUrl: './lifelines-item.component.html',
  styleUrls: ['./lifelines-item.component.scss']
})
export class LifelinesItemComponent implements OnInit {

  @Input() lifeline;
  isUsed: boolean = false;
  private dialogConfig;

  constructor(  public dialog: MatDialog,
                private millionaireQuestionsService: MillionaireQuestionsService,
                private errorService: ErrorHandlerService) {
                  this.dialogConfig = {
                    height: '200px',
                    width: '400px',
                    disableClose: true,
                    data: { }
                  }
                 }

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
      const dialogRef = this.dialog.open(ComfirmationDialogComponent);
      dialogRef.afterClosed().subscribe(result => {
          this.isUsed = result.isUsed;
          if(this.lifeline == "50/50"){
            console.log("5050");
            this.millionaireQuestionsService.announcefiftyLifelineSelected();
          } else if(this.lifeline == "Cambiar Pregunta"){
            this.millionaireQuestionsService.getQuestionByDifficulty().subscribe(
              {
                next: this.handleQuestionsResponse.bind(this),
                error: this.handleError.bind(this)
              });
          }
        });
    }
  }

  /***
   * @params {MillionaireQuestion} response - response from server after fetching a new question
   * @returns void 
   */ 
   handleQuestionsResponse(response: MillionaireQuestion){

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
