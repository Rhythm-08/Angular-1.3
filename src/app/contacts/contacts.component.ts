import { Component } from '@angular/core';
import {ContactsService} from '../contactsService/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private contactsService:ContactsService) { }
  contactList:any;
  ngOnInit(): void {
    this.contactList = this.contactsService.getContacts().subscribe(
      (data)=>{
        this.contactList = data;
      });
  }
  createContact(createResource: any){
    this.contactsService.createContact(createResource).subscribe(
      (data)=>{
        console.log(data);
      });
  }

}
