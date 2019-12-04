import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HardwareApiService {

  baseUri:string = environment.serverurl + "/api/hardware";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  // Create
  createHardware(data): Observable<any> {
      const url = `${this.baseUri}/create`;
      return this.http.post(url, data)
        .pipe(
          catchError(this.errorMgmt)
        )
  }
  
  // Get all
  getHardwares() {
    return this.http.get(`${this.baseUri}`);
  }

  //Get one
  getHardware(id): Observable<any> {
    console.log("Get hardware called")
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  //Update
  updateHardware(id, data): Observable<any> {
    console.log("Updoot hardware called")
    const url = `${this.baseUri}/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
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
