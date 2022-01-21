/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  users = [];
  // apiUrl = 'https://presentience-clients.in/myhome_mypride/restapi';
  apiUrl = 'http://localhost:30/myhome_mypride/restapi';

  constructor(private http: HttpClient) {}
  sendMail(mail) {
    //code to send mail
    console.log('mail sent successfully');
  }

  getPostData(methodName, requestData) {
    return this.http
      .post(this.apiUrl + methodName, requestData)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  getGetData(methodName) {
    return this.http
      .get(this.apiUrl + methodName)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  public userRegister(requestData) {
    return this.getPostData('/signup', requestData);
  }

  public verifyOtp(requestData) {
    return this.getPostData('/opt_verification', requestData);
  }

  public userLogin(requestData) {
    return this.getPostData('/login', requestData);
  }

  public addLocation(requestData) {
    return this.getPostData('/add_location', requestData);
  }

  public getCurrentUser() {
    return this.getGetData('/get_current_user_details');
  }

  public getStates(countryCode) {
    return this.getGetData('/state?country_id='+countryCode);
  }

  public getDistricts(countryId,stateId) {
    return this.getGetData('/district?country_id='+countryId+'&state_id='+stateId);
  }

  public searchHouses(searchText) {
    return this.getGetData('/search_houses?name='+searchText);
  }

  private extractData(res: Response) {
    console.log('Response Block=====>', res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Handle Error Block ==>', error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console
        .error
        //'Backend returned code ${error.status}, ' + 'body was: ${error.error}'
        ();
    }
    // return an observable with a user-facing error message
    var errorarr = [];
    var errorobj = { error: '401', errorstatus: error.status };
    errorarr.push(errorobj);
    // console.log(errorarr);
    return throwError(error);
    return errorarr;
  }
}
