import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EmpireSaysQuestion } from '../../models/games/empireSays.model'
import { map } from 'rxjs/operators'
import { SocketService } from '../../shared/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class EmpireSaysService {
    
    currQuestion: EmpireSaysQuestion;

    // Reveal Answer to user subject
    private answerReveal = new Subject<any>();
    answerReveal$ = this.answerReveal.asObservable();

    constructor(private http: HttpClient,
                private socketSerice: SocketService) { }

  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getQuestionByDifficulty(): Observable<EmpireSaysQuestion>{
        return this.http.get(`/api/v1/empire-says/get/difficulty/1`).pipe(
          map(x => this.currQuestion = x)
        )
      }
  //#endregion


  //#region POST FUNCTIONS

  //#endregion

    revealAnswerToPlayer(answerText: string){
      this.socketSerice.emit("empireSaysAnswerRevealSelected", answerText);
    }
}
