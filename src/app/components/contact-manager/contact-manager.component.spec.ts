import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactManagerComponent } from './contact-manager.component';

describe('ContactManagerComponent', () => {
  let component: ContactManagerComponent;
  let fixture: ComponentFixture<ContactManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactManagerComponent]
    });
    fixture = TestBed.createComponent(ContactManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
