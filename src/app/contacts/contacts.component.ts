import { Component } from '@angular/core';
import { AppModule } from '../app.module';
import {ContactsService} from '../contactsService/contacts.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
    msg=false;
  constructor(private contactsService:AppModule) { }
   contactList:any=[];
  ngOnInit(): void {
     this.contactsService.fresh.getContacts().subscribe(
      (result)=>{
        this.contactList = result;
      },
      (error)=>{
        console.error(error);
      }
      );
  }
  createContact(createResource: any){
    this.contactsService.fresh.createContact(createResource).subscribe(
      (data)=>{
         this.contactsService.fresh.getContacts().subscribe(
          (data)=>{
            this.contactList = data;
          });
        console.log(data);
      });
  }
  updateContact(updateResource: any){   
    console.log(updateResource);
    const upsource = {...updateResource};
    console.log(upsource.ID);
    
    this.contactsService.fresh.updateContact(upsource.ID,upsource).subscribe(
      (data)=>{
        this.contactsService.fresh.getContacts().subscribe(
          (data)=>{
            this.contactList = data;
          });
        console.log(data);
      });
  }
  deleteContact(updateResource: any){
    this.contactsService.fresh.deleteContact(updateResource.ID).subscribe(

      (data)=>{
        this.contactsService.fresh.getContacts().subscribe(
          (data)=>{
            this.contactList = data;
          });
        console.log(data);
      });
  }
  

}
