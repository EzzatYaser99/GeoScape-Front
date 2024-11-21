import {Component, OnInit} from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {Ripple} from "primeng/ripple";
import {RouterLink} from "@angular/router";
import {Carousel, CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {HeaderComponent} from "../../Shared-Component/header/header.component";

class Client {
  id?: string
  name?: string
  image?: string

}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    ButtonDirective,
    Ripple,
    Button,
    RouterLink,
    CarouselModule,
    TagModule,
    AvatarModule,
    FieldsetModule,
    HeaderComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  clients: Client[] =[{
      id: '',
      name: ' ',
      image: '.',
  }];

  responsiveOptions: any[] | undefined;

  constructor() {
    this.clients = [
      {
        id: '1',
        name: 'Sports Boulevard',
        image: 'sports-boulevard.webp',
      },
      {
        id: '2',
        name: 'NEOM',
        image: 'neom.webp',
      },
      {
        id: '3',
        name: 'Nesma & Partners',
        image: 'nesma.webp',
      },
      {
        id: '4',
        name: 'Power China',
        image: 'power-china.webp',
      },
      {
        id: '5',
        name: 'Freyssinet',
        image: 'freyssinet.webp',
      },
      {
        id: '6',
        name: 'Royal commission ',
        image: 'royal-commission.webp',
      },
      {
        id: '7',
        name: 'Sapac ',
        image: 'sapac.webp',
      },
      {
        id: '8',
        name: 'Alyamama ',
        image: 'alyamama.webp',
      },
      {
        id: '9',
        name: 'Zaid Alhussain ',
        image: 'zaid-alhussain.webp',
      },
    ];

  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

/* ProductService */
