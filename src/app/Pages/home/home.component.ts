import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../Shared-Component/header/header.component";
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ImageModule} from "primeng/image";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    RouterLink,
    RouterLinkActive,
    ImageModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  documents: any;
constructor() {
  this.documents = [
    {
      id: 1, name: 'GEOSCAPE Profile', pdfSrc: 'GEOSCAPE-Profile.pdf',imgSrc: 'GEOSCAPE-Profile.webp',
    },

    {
      id: 2, name: 'ISO certification', pdfSrc: 'شهادة-الأيزو.pdf',imgSrc: 'شهادة-الأيزو.webp'
    },

    {
      id: 3, name: 'The Line', pdfSrc: 'ذا-لاين.pdf',imgSrc: 'ذا-لاين.webp'
    },
    {
      id: 4, name: 'Sports Boulevard Foundation', pdfSrc: 'مؤسسة-المسار-الرياضي.pdf',imgSrc: 'مؤسسة-المسار-الرياضي.webp'
    },
    {
      id: 5, name: 'Royal Commission for AlUla', pdfSrc: 'Royal-Commission-for-AlUla.pdf',imgSrc: 'Royal-Commission-for-AlUla.webp'
    },
    {
      id: 6, name: 'misk city ', pdfSrc: 'misk-city.pdf',imgSrc: 'misk-city.webp'
    },
    {
      id: 7, name: 'WA0025', pdfSrc: 'WA0025.pdf',imgSrc: 'WA0025.webp'
    },
    {
      id: 8, name: 'MAT-000057_02', pdfSrc: 'MAT-000057.pdf',imgSrc: 'MAT-000057.webp'
    },
    {
      id: 9, name: 'GR-AUP-PQD-LAN-PLA', pdfSrc: 'GR-AUP-PQD-LAN-PLA.pdf',imgSrc: 'GR-AUP-PQD-LAN-PLA.webp'
    },
    {
      id: 10, name: 'GR-AUP-MAT-LAN', pdfSrc: 'GR-AUP-MAT-LAN.pdf',imgSrc: 'GR-AUP-MAT-LAN.webp'
    },

  ];

}
  ngOnInit(): void {

  }



}
