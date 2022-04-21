import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private broadcastLogin = new Subject<any>();
    broadcastLogin$ = this.broadcastLogin.asObservable();
    
    isLoggedIn: boolean = false; 
  constructor(private http: HttpClient) { 
  }

  notifyLogin(data: any){
      if(!this.isLoggedIn){
          this.isLoggedIn=true;
          this.broadcastLogin.next(data);
      }
  }

  getLoggedInStatus(){
      return this.isLoggedIn;
  }
}
