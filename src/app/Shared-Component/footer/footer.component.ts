import {Component, OnInit} from '@angular/core';
import {FooterInfo} from "./FooterInfo";
import {SocialMediaInfoComponent} from "../social-media-info/social-media-info.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SocialMediaInfoComponent,
    FormsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  openDays: Array<FooterInfo> = [];
  contactDetailsInfo: Array<FooterInfo> = [];
  ngOnInit(): void {
  this.openDays = [
    {openDays: 'Sunday to Thursday'},
    {openDays: '9.00 Am - 6.00 Pm (KSA time)'},
  ];

  this.contactDetailsInfo = [
    {id:1 ,Icon: 'pi pi-map-marker', Title: 'location ', herf: 'https://maps.app.goo.gl/tAMe31CRJtVjrR717'},
    {id:2 ,Icon: 'pi pi-phone', Title: '+966 54 664 4283', herf: 'https://wa.me/966546644283'},
  ];


  }

}
