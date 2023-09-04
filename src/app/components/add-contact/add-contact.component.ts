import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  public loading:boolean = false;
  public contact:IContact = {} as IContact;
  public errorMsg:string | null = null;
  public groups : IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService){}

  ngOnInit() : void{
    this.contactService.getAllGroups().subscribe((data:IGroup[]) =>{
      this.groups = data;
    },(error) => {
      this.errorMsg = error
    })
  }
}
