import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { EmpireSaysQuestion } from '../../models/games/empireSays.model'
import { map } from 'rxjs/operators'
import { SocketService } from '../../shared/services/socket.service';
import { Player } from 'src/app/models/player/player.model';

@Injectable({
  providedIn: 'root'
})
export class EmpireSaysService {

    currQuestion: EmpireSaysQuestion;
    currPlayerTurn:number = 1;

    // Reveal Answer to user subject
    private answerReveal = new Subject<any>();
    answerReveal$ = this.answerReveal.asObservable();

    private wrongAnswer = new Subject<any>();
    wrongAnswer$ = this.wrongAnswer.asObservable();

    private newQuestionRequested = new Subject<any>();
    newQuestionRequested$ = this.newQuestionRequested.asObservable();

    private scoreReset = new Subject<any>();
    scoreReset$ = this.scoreReset.asObservable();

    constructor(private http: HttpClient,
                private socketSerice: SocketService) { }

  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getQuestionByDifficulty(): Observable<EmpireSaysQuestion>{
        this.resetScoreBoardAccumulatedPoints();
        return this.http.get(`/api/v1/empire-says/get/difficulty/1`).pipe(
          map(x => {
            return this.currQuestion = x
          })
        )
      }
  //#endregion


  //#region POST FUNCTIONS

  //#endregion

    revealAnswerToPlayer(answerData: any){
      this.socketSerice.emit("empireSaysAnswerRevealSelected", {answerData: answerData, playerId: this.currPlayerTurn});
    }

    emitWrongAnswer(userId: number){
      this.socketSerice.emit("empireSaysWrongAnswerSource", {userId: userId});
    }

    emitNewQuestionRequested(){
      this.newQuestionRequested.next(this.currQuestion);
    }

    getCurrPlayerTurn(){
      return this.currPlayerTurn;
    }

    getUsersData(){
      let player_1: Player = {playerNumber: 1, username: "Joker", score: 0, profilePic: "assets/images/gifs/profile_empire_says_1.gif", lifes:["x","x","x"] }
      let player_2: Player = {playerNumber: 2, username: "Curse", score: 0, profilePic: "assets/images/gifs/profile_empire_says_2.gif", lifes:["x","x","x"] }
      let usersData: Player[] = [player_1, player_2];
      return usersData;
    }

    resetScoreBoardAccumulatedPoints(){
      this.scoreReset.next();
    }

    addScoreToPlayer(playerNumber: number){
      this.socketSerice.emit("addPointsToPlayer", playerNumber)
    }
    
    resetGame() {
      this.socketSerice.emit("gameReset", null);
    }

    showIncorrectAnswerBuzzer() {
      this.socketSerice.emit("buzzerRoundWrongAnswer", null);
    }
      
    revealQestionToPlayer() {
      this.socketSerice.emit("revealEmpireSayQuestion", null);
    }
  
}
