import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import  {TwitchLoginSdkModule} from "twitch-login-sdk";
import { UserLoginComponent } from '../../components/user/user-login/user-login.component';
import { AuthRoutingModule } from 'src/app/routing/user/auth-routing.module';



@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TwitchLoginSdkModule.forRoot({ 
		twitchId:  "bystbm1uuuqhsl5k4xhy8u24g3d6rp", //<******* YOUR TWITCH_ID 👈
		redirect:  "https://localhost:4200/auth/twitch/login" //<***** YOUR CALLBACK REDIRECT 👈
	}),
  ],
  exports: [
    RouterModule,
    UserLoginComponent,
  ],
})
export class UserAuthModule { }
