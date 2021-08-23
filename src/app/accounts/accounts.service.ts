import { Account } from './../model/account.model';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(
    public http: HttpClient
  ) { }


  getAccount(): Observable<Account[]> {

    return this.http.get(
      `http://localhost:8080/api/accounts`).pipe(
      map(res => {
        return res as Account[]
      })
    )
    catchError(this.handleError);
  }

  handleError(error: HttpErrorResponse) {
    return throwError({
      status: 'error',
      message: 'could not log in'
    });
  }
}
