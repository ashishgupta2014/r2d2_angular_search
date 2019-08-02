import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpErrorResponse, HttpParams, HttpResponse, HttpHeaders  } from '@angular/common/http';
// import { Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string = 'http://192.168.2.93:8000/api/v1/movie/autocomplete?q=';
  constructor(private _httpClient: HttpClient) { }
  search(queryString: string): Observable<any>  {
    debugger;
    let _URL = this.baseUrl + queryString;
    let httpOption = {
      headers: new HttpHeaders({
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
      'X-Requested-With': 'x', 
      'Content-Type': 'application/json', 
      })
      }
    return this._httpClient.get(_URL);
}
// downloadAOFDocument(id): Observable<any> {
//   this.setHeaders();
//   return this.http.get(API_URL + '/backend/private/download-aof/' + id, this.httpOptions);
//   }
}
