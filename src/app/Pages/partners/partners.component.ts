import { Component } from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-partners',
  standalone: true,
    imports: [
        AvatarModule,
        FieldsetModule,
        PrimeTemplate
    ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {

}
