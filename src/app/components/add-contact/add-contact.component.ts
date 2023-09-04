import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private contactService: ContactService,private router :Router){}

  ngOnInit() : void{
    this.contactService.getAllGroups().subscribe((data:IGroup[]) =>{
      this.groups = data;
    },(error) => {
      this.errorMsg = error
    })
  }

  public createSubmit(){
    this.contactService.createContact(this.contact).subscribe((data:IContact) => {
          this.router.navigate(['/']).then();
    },(error) => {
      this.errorMsg = error;
      this.router.navigate(['/contacts/add']).then();
    })

  }
}
