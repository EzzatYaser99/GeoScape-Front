import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NgFor, NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {MultiSelectModule} from "primeng/multiselect";
import {DropdownModule} from "primeng/dropdown";
import {MessagesModule} from "primeng/messages";
import { MessageService} from "primeng/api";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FormsModule,
    InputTextareaModule,
    ChipsModule,
    ButtonModule,
    RippleModule,
    NgIf,
    NgFor,
    MultiSelectModule, DropdownModule, MessagesModule

  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  providers:[MessageService]
})
export class ContactsComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
  phone: string | undefined;
  selectedServices: any | undefined;

  isSubmitting: boolean = false;
  isSuccess: boolean = false;
  isError: boolean = false;
  Services: any;
  invalidName: boolean = false;
  invalidEmail: boolean = false;
  invalidPhoneNumber: boolean = false;
  successMessage: any;
  errorMessage: any;
  showMessage: boolean= false;
  isLoading: boolean = false

  constructor(private _http: HttpClient ,private messageService: MessageService) {
    this.Services = [
      {id: 1 , name: 'Landscape Design' ,image:'Landscape-Design.jpg'},
      {id: 2 , name: 'SoftScape' ,image:'Soft-Landscape.jpg'},
      {id: 3 , name: 'Nursery' ,image:'Nursery.jpg'},
      {id: 4 , name: 'Irrigation' ,image:'Irrigation.jpeg'},
      {id: 5 , name: 'Water Features' ,image:'Water-Features.jpg'},
      {id: 6 , name: 'Water & Drainage Systems' ,image:'Water-Systems.jpg'},
      {id: 7 , name: 'HardScape' ,image:'Hard-Landscape.jpg'},
      {id: 8 , name: 'Maintenance' ,image:'Landscape-Maintenance.jpg'},
      {id: 9 , name: 'Street Lighting' ,image:'Street-Lighting.jpg'},
      {id: 10 , name: 'Street Furniture' ,image:'Street-Furniture.jpg'},
      {id: 11 , name: 'Playground Equipment' ,image:'Playground-Equipment.jpg'},
      {id: 12 , name: 'Covers and Grates' ,image:'covers-and-grates.jpg'},

    ];

  }
  ngOnInit(): void {
  }
  onChangeName(event: any) {
    this.name = event.target.value;
    if(this.name != '' && this.name) {
      this.invalidName = false;
    }else{
      this.invalidName = true;
    }
  }

  onChangeEmail(event: any) {
    this.email = event.target.value;
    if(this.email?.match('^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$') != null) {
      this.invalidEmail = false;
    }else{
      this.invalidEmail = true;

    }
  }
  onChangePhoneNumber(event:any) {
    this.phone = event.target.value;
    if(this.phone?.match(/^((\+?)\d{1,3}[- ]?)?\d{10,11}$/) && !(this.phone?.match(/0{5,}/))) {
      this.invalidPhoneNumber = false;
    }else{
      this.invalidPhoneNumber = true;
    }
  }


  submitForm() {
    this.isLoading = true
    this.invalidName = !(this.name != '' && this.name);
    const selectedServiceNames = this.selectedServices.map((item:any) => item.name);
    const data = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      service:selectedServiceNames,
      message:this.message,

    };

    this.sendEmail(data).subscribe(
      response => {
        this.showMessage = true;
        this.successMessage = [
          {severity: 'success', summary: 'Email sent successfully!'},
        ];
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);

        setTimeout(() => {
          this.isLoading = false;
        }, 4000);
      },
      error => {
        this.showMessage = true;
        this.errorMessage = [
          {severity: 'error', detail: 'Error sending email'},
        ];
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
        setTimeout(() => {
          this.isLoading = false;
        }, 4000);
      }
    );

  }


  sendEmail(data:any) {
  // let emailUrl = 'http://localhost:3000/send-email';
  let emailUrl = 'http://backend.bassamabassy.me/bundle.js';
    return this._http.post(emailUrl, data);
  }



  validateDisable() {
    // return !(this.name && this.phone && this.email && !this.isLoading);

  }



}
