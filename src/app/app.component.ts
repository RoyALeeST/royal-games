import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'app-skeleton';

  constructor(private socketService: SocketService) {

  }
  ngOnInit(): void {
    this.socketService.listen("spin").subscribe({
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

}
