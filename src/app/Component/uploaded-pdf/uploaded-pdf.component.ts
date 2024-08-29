import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-uploaded-pdf',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    NgIf
  ],
  templateUrl: './uploaded-pdf.component.html',
  styleUrl: './uploaded-pdf.component.scss'
})
export class UploadedPdfComponent implements OnInit {
  documents: any;
  selectedDocument: any;
  url: any;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute ,private _sanitizer :DomSanitizer ) {
    this.documents = [
      {
        id: 1, name: 'GEOSCAPE Profile', pdfSrc: 'GEOSCAPE-Profile.pdf',imgSrc: 'GEOSCAPE-Profile.png',
      },

      {
        id: 2, name: 'ISO certification', pdfSrc: 'شهادة-الأيزو.pdf',imgSrc: 'شهادة-الأيزو.png'
      },

      {
        id: 3, name: 'The Line', pdfSrc: 'ذا-لاين.pdf',imgSrc: 'ذا-لاين.png'
      },
      {
        id: 4, name: 'Sports Boulevard Foundation', pdfSrc: 'مؤسسة-المسار-الرياضي.pdf',imgSrc: 'مؤسسة-المسار-الرياضي.jpeg'
      },
      {
        id: 5, name: 'Royal Commission for AlUla', pdfSrc: 'Royal-Commission-for-AlUla.pdf',imgSrc: 'Royal-Commission-for-AlUla.png'
      },
      {
        id: 6, name: 'misk city ', pdfSrc: 'misk-city.pdf',imgSrc: 'misk-city.png'
      },
      {
        id: 7, name: 'WA0025', pdfSrc: 'WA0025.pdf',imgSrc: 'WA0025.PNG'
      },
      {
        id: 8, name: 'MAT-000057_02', pdfSrc: 'MAT-000057.pdf',imgSrc: 'MAT-000057.PNG'
      },
      {
        id: 9, name: 'GR-AUP-PQD-LAN-PLA', pdfSrc: 'GR-AUP-PQD-LAN-PLA.pdf',imgSrc: 'GR-AUP-PQD-LAN-PLA.PNG'
      },
      {
        id: 10, name: 'GR-AUP-MAT-LAN', pdfSrc: 'GR-AUP-MAT-LAN.pdf',imgSrc: 'GR-AUP-MAT-LAN.PNG'
      },

    ];

  }

  ngOnInit(): void {
    this.getDocument();
    setTimeout(() => {
      this.isLoading = false;
    }, 3500);
  }

  private getDocument() {

    this.selectedDocument = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedDocument = this.documents.find((value:any) => value.id == Number(id))
    this.url = 'assets/document-approvals/'+ this.selectedDocument.pdfSrc;
   this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

}
