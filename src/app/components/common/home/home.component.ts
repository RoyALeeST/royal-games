import { Component, OnInit, ViewChild } from '@angular/core';
import { SpinWheelComponent } from '../../games/spin-wheel/spin-wheel.component';
import { SpinWheelService } from '../../../services/games/spinwheel.service'
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(SpinWheelComponent /* #name or Type*/, {static: false}) spinWheelComponent;

  private dialogConfig;
  questions: any[];

  constructor(private dialog: MatDialog, 
    private errorService: ErrorHandlerService,
    private spinwheelService: SpinWheelService) {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: { }
    }

    // Get all spinwheel options
    this.spinwheelService.getSpinWheelOptions().subscribe(
        {
          next: this.handleGetAllOptionsResponse.bind(this),
          error: this.handleError.bind(this)
        });
   }


  ngOnInit() {
  }

  executeSelectedChange(event){
    this.spinWheelComponent.loadWheel(this.questions);
  }

  handleGetAllOptionsResponse(response){
    this.questions = response;

  }

  handleError(error){
    console.log(error)
    this.errorService.dialogConfig = { ...this.dialogConfig };
    this.errorService.handleError(error);
  }
}
