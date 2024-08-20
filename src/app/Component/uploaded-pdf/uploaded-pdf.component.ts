import {Component, OnInit, Sanitizer} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-uploaded-pdf',
  standalone: true,
  imports: [],
  templateUrl: './uploaded-pdf.component.html',
  styleUrl: './uploaded-pdf.component.scss'
})
export class UploadedPdfComponent implements OnInit {
  documents: any;
  selectedDocument: any;
  url: any;

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

    ];

  }

  ngOnInit(): void {
    this.getDocument();
  }

  private getDocument() {

    this.selectedDocument = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedDocument = this.documents.find((value:any) => value.id == Number(id))
    this.url = 'assets/document-approvals/'+ this.selectedDocument.pdfSrc;
   this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

}
