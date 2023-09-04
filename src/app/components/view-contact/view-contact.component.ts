import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  public loading = false;
  public contactId:string | null = null;
  public contact:IContact = {} as IContact;
  public errorMsg: string | null = null;
  public group:IGroup = {} as IGroup;

  constructor(private activatedRoute : ActivatedRoute,private contactService:ContactService){}

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((param:Params) => {
      this.contactId = param['get']('contactId');
    });
    if(this.contactId){
      this.loading = true;
      this.contactService.getContact(this.contactId).subscribe((data:IContact) => {
         this.contact = data;
         this.loading = false;
         this.contactService.getGroup(this.contact).subscribe((data:IGroup) => {
          this.group = data;
        })

      },(error) => {
        this.errorMsg = error;
        this.loading = false;
      })
    }

   
  }

  public isNotEmpty(){
    return Object.keys(this.contact).length > 0 &&  Object.keys(this.group).length > 0 ;
  }
}
