import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'royal-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
	public outCb:  any;

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  	/** Callback Data **/
	out($event): any   {
    this.outCb = $event;
    this.authService.notifyLogin(this.outCb);
    this.router.navigate(['/home']);
  }
}
