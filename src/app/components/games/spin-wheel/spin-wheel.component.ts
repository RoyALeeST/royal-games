import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { SpinWheelService } from '../../../services/games/spinwheel.service';
import { SocketService } from '../../../shared/services/socket.service'

declare var initWheel: any;

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss']
})
export class SpinWheelComponent implements OnInit {

  twitch_instruction: Observable<any>;
  currentDoc: string;
  isWheelLoaded: boolean = false;
  private _docSub: Subscription;

  constructor(private spinwheelService: SpinWheelService,
              private socketService: SocketService) { }

  loadWheel(spinWheelOptions: any[]){
    if(!this.isWheelLoaded){
      initWheel(spinWheelOptions);
      this.isWheelLoaded = true;
    }
  }

  ngOnInit() {
    this.socketService.listen("empireSaysAnswer").subscribe({
      next: this.handleGetAllOptionsResponse.bind(this),
      error: this.handleError.bind(this)
    })
  }

  handleGetAllOptionsResponse(response){
    console.log(response)
  }

  handleError(error){
    console.log(error)

  }

  spinWheel(){
  }

}
