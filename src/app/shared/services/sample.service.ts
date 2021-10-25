import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  //#region GET FUNCTIONS
    /**
     * Fetch a customer from server using his id as search parameter
     * @param {string} customerId No params
     * @return {Observable} found customer
     */
      public getCustomerById(customerId: string): Observable<any>{
        return this.http.get(`api/v1/customers/get/${customerId}`) 
      }

      /**
     * Fetch all customers from db
     * @param {none} none No params
     * @return {Observable} found customers
     */
      public getCustomers(): Observable<any>{
        return this.http.get(`api/v1/customers/get/all`) 
      }
  //#endregion


  //#region POST FUNCTIONS
      /**
     * Fetch a customer from server using his id as search parameter
     * @param {Customer} user No params
     * @return {Observable} id of just created customer to redirect to it's detail page
     */
      public createCustomer(user: User): Observable<any>{
        return this.http.post(`api/v1/customers/post/new-customer/`, user) 
      }
  //#endregion
}
