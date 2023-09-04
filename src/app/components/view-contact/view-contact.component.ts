import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {

  public contactId:string | null = null;

  constructor(private activatedRoute : ActivatedRoute){}

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((param:Params) => {
      this.contactId = param['get']('contactId');
    })
  }
}
