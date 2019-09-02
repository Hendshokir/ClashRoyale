import { Card } from './../models/card.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ClashService {
  private BASE_URL =  'http://www.clashapi.xyz/';
  private CARDS_URL = this.BASE_URL + 'api/cards/';

  constructor(private http: HttpClient) {}

  getCardsList(): Observable<Card[]> {
    return this.http.get<Card[]>(this.CARDS_URL).pipe(
      tap((result) => {
        console.log('CardsList found');
      }),
      catchError(this.handleError<Card[]>('CardsList', null))
    );
  }

  getCardDetails(idName: string): Observable<Card> {
    return this.http.get<Card>(this.CARDS_URL + idName).pipe(
      tap((result) => {
        console.log('CardDetails found');
      }),
      catchError(this.handleError<Card>('CardDetails', null))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      console.log(error.statusText);
      return;
    };
  }



}
