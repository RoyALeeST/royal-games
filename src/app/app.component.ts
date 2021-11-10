import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service'

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

  }
    
  public invokeParticles(): void {
    particlesJS.load('particles-js', 'assets/particles/particlesjs-config.json', function() {});

0  }
}
