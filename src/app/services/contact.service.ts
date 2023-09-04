import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private static serverUrl: string = 'http://localhost:9000';
  
  constructor(private httpClient:HttpClient) { }

  public getAllContacts():Observable<IContact[]> {
    let dataUrl:string =`${ContactService.serverUrl}/contacts`;
    return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError))
  }

  public handleError(error:HttpErrorResponse){
    let errorMsg:string = '';
    if(error.error instanceof ErrorEvent){
      // client error
      errorMsg =`Error: ${error.error.message}`
    }
    else {
     // server error
      errorMsg =`Status: ${error.status}\n Message:${error.message}`
    }
    return throwError(errorMsg)
  }
}
