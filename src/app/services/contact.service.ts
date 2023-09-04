import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private static serverUrl: string = 'http://localhost:9000';
  
  constructor(private httpClient:HttpClient) { }

// GET ALL contact
  public getAllContacts():Observable<IContact[]> {
    let dataUrl:string =`${ContactService.serverUrl}/contacts`;
    return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError))
  }
// GET Single contact
  public getContact(contactId:string):Observable<IContact> {
    let dataUrl:string =`${ContactService.serverUrl}/contacts/${contactId}`;
    return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError))
  }

  // Create a Contact
  public createContact(contact:IContact):Observable<IContact>{
    let dataUrl:string =`${ContactService.serverUrl}/contacts`;
    return this.httpClient.post<IContact>(dataUrl,contact).pipe(catchError(this.handleError))
  }

  // Update a Contact
  public updateSContact(contact:IContact,contactId:string):Observable<IContact>{
    let dataUrl:string =`${ContactService.serverUrl}/contacts/${contactId}`;
    return this.httpClient.put<IContact>(dataUrl,contact).pipe(catchError(this.handleError))
  }

  // Delete a Contact
  public deleteSContact(contactId:string):Observable<{}>{
    let dataUrl:string =`${ContactService.serverUrl}/contacts/${contactId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError))
  }

  // Get All Groups
  public getAllGroups():Observable<IGroup[]>{
    let dataUrl:string =`${ContactService.serverUrl}/groups`;
    return this.httpClient.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError))
  }
  // Get Single Group
  public getGroup(contact:IContact):Observable<IGroup>{
    let dataUrl:string =`${ContactService.serverUrl}/groups/${contact.groupId}`;
    return this.httpClient.get<IGroup>(dataUrl).pipe(catchError(this.handleError))
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
