import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  propertyTypes : string[] = ['Condominium', 'Landed Terrace', 'Landed Bungalow', 'Commercial'];
  propertyStatuses : string[] = ['Keys collected', 'Awaiting key collection'];

  contactUsForm : FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) 
  {  }

  ngOnInit(): void 
  {
    this.initializeForm();
  }

  initializeForm(): void 
  {
    this.contactUsForm = this.formBuilder.group({
      name: '',
      contactNumber: '',
      email: '',
      expectedCompletionDate: '',
      propertyType: '',
      propertyStatus: '',
      themePreferred: '',
      budget: '',
      message: ''
    });
  }

  onSubmit(e: Event): void 
  {
    e.preventDefault();

    let data = {
      service_id: 'service_ii3730d',
      template_id: 'template_wgn8raq',
      user_id: 'YI1P2rXS5jEd0uvDJ',
      template_params: {
        name: this.contactUsForm.value.name,
        contactNumber: this.contactUsForm.value.contactNumber,
        email: this.contactUsForm.value.email,
        expectedCompletionDate: this.contactUsForm.value.expectedCompletionDate,
        propertyType: this.contactUsForm.value.propertyType,
        propertyStatus: this.contactUsForm.value.propertyStatus,
        themePreferred: this.contactUsForm.value.themePreferred,
        budget: this.contactUsForm.value.budget,
        message: this.contactUsForm.value.message
      }
    };

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
      .subscribe((result) => {
        alert('Your message has been sent! We will keep in touch soon!');
      }, (error: HttpErrorResponse) => {
        alert('Oops... ' + error.message);
      }
    );
  }

  selectPropertyType(event): void
  {
    this.contactUsForm.patchValue({
      propertyType: event.target.value
    })
  }
  
  selectPropertyStatus(event): void
  {
    this.contactUsForm.patchValue({
      propertyStatus: event.target.value
    })
  }
}
