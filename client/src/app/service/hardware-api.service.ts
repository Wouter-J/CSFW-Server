import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HardwareApiService {

  baseUri:string = 'http://localhost:5000/api'; //TODO: Change this to env variable
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  // Create
  createHardware(data): Observable<any> {
      let url = `${this.baseUri}/create`;
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
  }
  
  // Get all
  getHardware() {
    return this.http.get(`${this.baseUri}`);
  }

  //Errors go here
  //TODO: Clean this up, make this a service
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
