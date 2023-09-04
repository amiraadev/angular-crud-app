import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent {

  public loading:boolean = false;
  public contacts:IContact[] = [];
  public errorMsg:string | null = null;

  constructor(private contactService:ContactService){}

  ngOnInit():void{
    this.loading = true;
    this.contactService.getAllContacts().subscribe((data:IContact[]) => {
         this.contacts = data;
         this.loading= false;
    },
    (error) => {
       this.errorMsg = error;
       this.loading= false;
    })
  }
}
