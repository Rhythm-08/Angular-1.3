import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient:HttpClient) { } 
  url = 'http://localhost:3000/contacts';
//GET http method is working for you
  getContacts(){
       return this.httpClient.get(this.url);
  }
  createContact(createResource: any){
    return this.httpClient.post(this.url,createResource);
  }
}
