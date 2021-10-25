import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { SpinWheelOption } from '../../models/games/spinwheel.model';
// import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SpinWheelService {

  constructor(private http: HttpClient) { 
  }
  


  //#region GET FUNCTIONS
      /**
     * Fetch all spin wheel options from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getSpinWheelOptions(): Observable<any>{
        return this.http.get(`/api/v1/spinwheel/get/all`) 
      }
  //#endregion


  //#region POST FUNCTIONS
      /**
     * Fetch a customer from server using his id as search parameter
     * @param {SpinWheelOption} spinwheelOption
     * @return {Observable} id of just created spinwheelOption
     */
      public createSpinWheelOption(spinWheelOption: SpinWheelOption): Observable<any>{
        return this.http.post(`api/v1/spinwheel/post/new-spinwheel-option`, spinWheelOption) 
      }

    /**
     * Fetch a customer from server using his id as search parameter
     * @param {SpinWheelOption} spinwheelOption
     * @return {Observable} id of just created spinwheelOption
     */
             public createMultipleSpinWheelOptionS(spinWheelOption: SpinWheelOption): Observable<any>{
                return this.http.post(`api/v1/spinwheel/post/new-spinwheel-option`, spinWheelOption) 
              }
  //#endregion
}
