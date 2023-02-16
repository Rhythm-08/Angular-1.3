import { Component } from '@angular/core';
import {ContactsService} from '../contactsService/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
    msg=false;
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
  updateContact(updateResource: any){   
    console.log(updateResource);
    const upsource = {...updateResource};
    console.log(upsource.ID);
    
    this.contactsService.updateContact(upsource.ID,upsource).subscribe(
      (data)=>{
        console.log(data);
      });
  }

}
