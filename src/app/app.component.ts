import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service'
import { ParticlesConfig } from './particles-config';
import * as ParticlesConfigJSON  from './particles-config.json';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  constructor(private socketService: SocketService) {

  }
  ngOnInit(): void {
    this.socketService.listen("spin").subscribe({
      next: this.handleGetAllOptionsResponse.bind(this),
      error: this.handleError.bind(this)
    })
    this.invokeParticles();

  }
  
  handleGetAllOptionsResponse(response){
    console.log(response)
  }

  handleError(error){
    console.log(error)

  }
    
  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles/particlesjs-config.json', function() {});

0  }
}
