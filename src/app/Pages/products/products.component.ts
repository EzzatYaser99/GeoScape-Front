import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {ListboxModule} from "primeng/listbox";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {FormsModule} from "@angular/forms";
import {TabViewModule} from "primeng/tabview";

@Component({
  selector: 'app-products',
  standalone: true,
    imports: [
        AvatarModule,
        FieldsetModule,
        PrimeTemplate,
        ButtonDirective,
        CardModule,
        ListboxModule,
        GalleriaModule,
        ImageModule,
        FormsModule,
        TabViewModule
    ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  plants: any;
  benitoProducts: any;
  geoscapeTrees: any;
  selectedBenitoProduct: any;
  responsiveOptions: any[] | undefined;
constructor() {
  this.responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 2
    }
  ];
  this.plants = [
    {
      id: 1, name: 'Stipagrostis Plumosa', imageSrc: 'Stipagrostis-Plumosa.jpeg',
      description: 'An attractive grass that thrives in arid environments, ideal for xeriscaping.'
    },
    {
      id: 2, name: 'Pennisetum Setaceum', imageSrc: 'Pennisetum-Setaceum.jpg',
      description: 'A popular ornamental grass known for its graceful, feathery plumes.'
    },
    {
      id: 3, name: 'Sesuvium Portulacastrum', imageSrc: 'Sesuvium-Portulacastrum.JPG',
      description: ' A hardy ground cover with succulent leaves, perfect for coastal areas.'
    },
    {
      id: 4, name: 'Carissa Macrocarpa', imageSrc: 'Carissa-Macrocarpa.jpg',
      description: 'A versatile shrub with glossy leaves and fragrant flowers, suitable for hedges and borders.'
    },
    {
      id: 5, name: 'Agave Angustifolia', imageSrc: 'Agave-Angustifolia.jpg',
      description: 'A striking succulent with narrow leaves, well-suited for desert landscapes.'
    },
    {
      id: 6, name: 'Agave Sisalana', imageSrc: 'Agave-Sisalana.jpg',
      description: 'Known for its long, sturdy leaves, commonly used in fiber production and as an ornamental plant.\n'
    },
    {
      id: 7, name: 'Aloe Arborescensa', imageSrc: 'Aloe-Arborescensa.jpeg',
      description: 'A hardy aloe species with medicinal properties, great for rock gardens and borders.'
    },
    {
      id: 8, name: 'Dasylirion Longifolium', imageSrc: 'Dasylirion-Longifolium.jpg',
      description: 'A dramatic, spiky plant that adds architectural interest to any garden.'
    },

  ],

    this.geoscapeTrees = [
      {
        id: 1, category: 'Trees', name: 'CERATONIA SILIQUA (Carob Tree)', imageSrc: 'trees/CERATONIA-SILIQUA.png',
        description: 'CERATONIA SILIQUA, commonly known as the Carob Tree, is suitable for transplantation with proper timing. ' +
          'It is a robust tree ideal for various landscape projects.'
      },
      {
        id: 2, category: 'Trees', name: 'Pithecellobium dulce (Madras Thorn)', imageSrc: 'trees/Pithecellobium-dulce.png',
        description: 'Pithecellobium dulce, also known as Madras Thorn, serves as an alternative to the Carob Tree. It is available for transplantation in October.'
      },
      {
        id: 3, category: 'Trees', name: 'Melia Azedarach (Chinaberry Tree)', imageSrc: 'trees/Melia-Azedarach.png',
        description: 'Melia Azedarach, or Chinaberry Tree, is another alternative to the Carob Tree. It is suitable for transplantation in October.\n'
      },
      {
        id: 4, category: 'Shrubs', name: 'General Shrubs', imageSrc: 'trees/General-Shrubs.png',
        description: 'Various shrubs that should be placed against walls to avoid strong winds. These shrubs are ideal for creating sheltered garden spaces.'
      },
      {
        id: 5, category: 'Herbaceous', name: 'SALVIA AEGYPTIACA (Egyptian Sage)', imageSrc: 'trees/SALVIA-AEGYPTIACA.png',
        description: 'SALVIA AEGYPTIACA, or Egyptian Sage, is available for transplantation in October. It is a versatile herbaceous plant perfect for adding texture to gardens.'
      },
      {
        id: 6, category: 'Herbaceous', name: 'SALVIA OFFICINALIS (Common Sage)', imageSrc: 'trees/SALVIA-OFFICINALIS.png',
        description: 'SALVIA OFFICINALIS, also known as Common Sage, serves as an alternative to Egyptian Sage. It is known for its aromatic leaves and medicinal properties.'
      },
      {
        id: 7, category: 'Herbaceous', name: 'Mentha longifolia (Wild Mint)', imageSrc: 'trees/Mentha-longifolia.png',
        description: 'Mentha longifolia, or Wild Mint, is another alternative to Egyptian Sage.' +
          ' It is characterized by its fragrant foliage and is suitable for various garden settings.'

      },
      {
        id: 10, category: 'Succulents', name: 'General Succulents', imageSrc: 'trees/General-Succulents.png',
        description: 'A variety of succulents suitable for the landscape,\n' +
          '  known for their drought resistance and unique forms. They are perfect for' +
          ' low-maintenance gardens'
      },
      {
        id: 11, category: 'Climbers', name: 'General Climbers', imageSrc: 'trees/General-Climbers.png',
        description: 'Climbing plants ideal for vertical gardens, adding green coverage to walls\n' +
          '  and trellises. They are excellent for creating living walls and enhancing vertical spaces.'
      },
      {
        id: 12, category: 'Grass (Lawn)', name: 'Dasylirion Longifolium', imageSrc: 'trees/Dasylirion-Longifolium.png',
        description: 'Suitable grass species for lawn areas, providing lush green coverage\n' +
          '  that is ideal for recreational and aesthetic purposes.'
      },

    ]

  this.benitoProducts = [
    {
      id: 1, name: 'Urban Furniture', imageSrc: '', description: 'Elegant and durable furniture solutions for both public and private' +
        ' settings.', subImages: [
        {id: 1, imageSrc: 'Urban-Furniture/Urban-Furniture-1.png'},
        {id: 2, imageSrc: 'Urban-Furniture/Urban-Furniture-2.png'},
        {id: 3, imageSrc: 'Urban-Furniture/Urban-Furniture-3.png'},
        {id: 4, imageSrc: 'Urban-Furniture/Urban-Furniture-4.png'},
      ]
    },
    {
      id: 2,
      name: 'Play Equipment',
      imageSrc: '',
      description: 'Safe and captivating play structures suitable for children of all ages.',
      subImages: [
        {id: 1, imageSrc: 'Play-Equipment/Play-Equipment-1.png'},
        {id: 2, imageSrc: 'Play-Equipment/Play-Equipment-2.png'},
        {id: 3, imageSrc: 'Play-Equipment/Play-Equipment-3.png'},
        {id: 4, imageSrc: 'Play-Equipment/Play-Equipment-4.png'},
      ]
    },
    {
      id: 3, name: 'Sports and Fitness Equipment', imageSrc: '', description: 'Premium quality gear designed to encourage physical' +
        ' activity and well-being.', subImages: [
        {id: 1, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-1.png'},
        {id: 2, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.png'},
        {id: 3, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-2.png'},
        {id: 4, imageSrc: 'Sports-and-Fitness-Equipment/Sports-and-Fitness-Equipment-3.png'},
      ]
    },
    {
      id: 4, name: 'Wood Plastic Composites', imageSrc: '', description: 'Eco-friendly and versatile materials ideal for numerous' +
        ' applications.', subImages: [
        {id: 1, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-1.png'},
        {id: 2, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-2.png'},
        {id: 3, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-3.png'},
        {id: 4, imageSrc: 'Wood-Plastic-Composites/Wood-Plastic-Composites-4.jpg'},
      ]
    },
    {
      id: 5, name: 'Street Lighting', imageSrc: '', description: 'Innovative and efficient street lighting solutions for safer and' +
        ' brighter public spaces.', subImages: [
        {id: 1, imageSrc: 'Street-Lighting/Street-Lighting-1.png'},
        {id: 2, imageSrc: 'Street-Lighting/Street-Lighting-2.png'},
        {id: 3, imageSrc: 'Street-Lighting/Street-Lighting-3.png'},
        {id: 4, imageSrc: 'Street-Lighting/Street-Lighting-4.png'},
      ]
    },
    {
      id: 6, name: 'Street Furniture', imageSrc: '', description: 'Durable and stylish street furniture to improve the comfort and' +
        ' functionality of outdoor areas.', subImages: [
        {id: 1, imageSrc: 'Street-Furniture/Street-Furniture-1.png'},
        {id: 2, imageSrc: 'Street-Furniture/Street-Furniture-2.png'},
        {id: 3, imageSrc: 'Street-Furniture/Street-Furniture-3.png'},
        {id: 4, imageSrc: 'Street-Furniture/Street-Furniture-4.png'},
      ]
    },
    {
      id: 7,
      name: 'Mobility',
      imageSrc: '',
      description: 'Solutions designed to facilitate urban mobility and accessibility.',
      subImages: [
        {id: 1, imageSrc: 'Mobility/Mobility-1.png'},
        {id: 2, imageSrc: 'Mobility/Mobility-2.png'},
        {id: 3, imageSrc: 'Mobility/Mobility-3.png'},
        {id: 4, imageSrc: 'Mobility/Mobility-4.png'},
      ]
    },
    {
      id: 8, name: 'Playground Sports Equipment', imageSrc: '', description: 'Safe and engaging equipment for playgrounds and sports' +
        ' areas, suitable for all ages.', subImages: [
        {id: 1, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-1.png'},
        {id: 2, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-2.png'},
        {id: 3, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-3.png'},
        {id: 4, imageSrc: 'Playground-Sports-Equipment/Playground-Sports-Equipment-4.png'},
      ]
    },
    {
      id: 9, name: 'Sports Equipment', imageSrc: '', description: 'High-quality sports equipment to promote physical activity and' +
        ' well-being.', subImages: [
        {id: 1, imageSrc: 'Sports-Equipment/Sports-Equipment-1.jpg'},
        {id: 2, imageSrc: 'Sports-Equipment/Sports-Equipment-2.png'},
        {id: 3, imageSrc: 'Sports-Equipment/Sports-Equipment-3.png'},
        {id: 4, imageSrc: 'Sports-Equipment/Sports-Equipment-4.png'},
      ]
    },
    {
      id: 10,
      name: 'Covers and Grates',
      imageSrc: '',
      description: 'Robust and reliable covers and grates for various urban infrastructure' +
        ' needs.',
      subImages: [
        {id: 1, imageSrc: 'Covers-and-Grates/Covers-and-Grates-1.png'},
        {id: 2, imageSrc: 'Covers-and-Grates/Covers-and-Grates-2.png'},
        {id: 3, imageSrc: 'Covers-and-Grates/Covers-and-Grates-3.png'},
        {id: 4, imageSrc: 'Covers-and-Grates/Covers-and-Grates-4.png'},
      ]
    },
    {
      id: 1, name: 'Riga', imageSrc: '', description: 'Innovative solutions for urban development and beautification.', subImages: [
        {id: 4, imageSrc: 'Riga/Riga-1.png'},
        {id: 2, imageSrc: 'Riga/Riga-2.png'},
        {id: 3, imageSrc: 'Riga/Riga-3.png'},
        {id: 4, imageSrc: 'Riga/Riga-4.png'},
      ]
    },
    {
      id: 12, name: 'Arko', imageSrc: '', description: 'Durable and stylish urban furniture and accessories.', subImages: [
        {id: 1, imageSrc: 'Arko/Arko-1.png'},
        {id: 2, imageSrc: 'Arko/Arko-2.png'},
        {id: 3, imageSrc: 'Arko/Arko-3.png'},
        {id: 4, imageSrc: 'Arko/Arko-4.png'},
      ]
    },
    {
      id: 13, name: 'Arka', imageSrc: '', description: 'High-quality, modern street furniture for public spaces.', subImages: [
        {id: 1, imageSrc: 'Arka/Arka-1.png'},
        {id: 2, imageSrc: 'Arka/Arka-2.png'},
        {id: 3, imageSrc: 'Arka/Arka-3.png'},
        {id: 4, imageSrc: 'Arka/Arka-4.png'},
      ]
    },
    {
      id: 14, name: 'Arne', imageSrc: '', description: 'Functional and aesthetically pleasing urban design elements.', subImages: [
        {id: 1, imageSrc: 'Arne/Arne-1.png'},

      ]
    },
    {
      id: 15, name: 'Arte', imageSrc: '', description: 'Creative and artistic urban design solutions.', subImages: [
        {id: 1, imageSrc: 'Arte/Arte-1.png'},
        {id: 2, imageSrc: 'Arte/Arte-2.png'},
        {id: 3, imageSrc: 'Arte/Arte-3.png'},
        {id: 4, imageSrc: 'Arte/Arte-4.png'},
      ]
    },
    {
      id: 16, name: 'Citizen', imageSrc: '', description: 'Stylish and functional urban furniture for public areas.', subImages: [
        {id: 1, imageSrc: 'Citizen/Citizen-1.png'},
        {id: 2, imageSrc: 'Citizen/Citizen-2.png'},
        {id: 3, imageSrc: 'Citizen/Citizen-3.png'},
        {id: 4, imageSrc: 'Citizen/Citizen-4.png'},
      ]
    },
    {
      id: 17, name: 'Coro', imageSrc: '', description: 'Elegant and durable urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Coro/Coro-1.png'},
        {id: 2, imageSrc: 'Coro/Coro-2.png'},
        {id: 3, imageSrc: 'Coro/Coro-3.png'},
        {id: 4, imageSrc: 'Coro/Coro-4.png'},
      ]
    },
    {
      id: 18, name: 'Minsk', imageSrc: '', description: 'High-quality urban design products for public spaces.', subImages: [
        {id: 1, imageSrc: 'Minsk/Minsk-1.png'},
        {id: 2, imageSrc: 'Minsk/Minsk-2.png'},
        {id: 3, imageSrc: 'Minsk/Minsk-3.png'},
        {id: 4, imageSrc: 'Minsk/Minsk-4.png'},
      ]
    },
    {
      id: 19, name: 'Piro', imageSrc: '', description: 'Functional and stylish urban furniture.', subImages: [
        {id: 1, imageSrc: 'Piro/Piro-1.png'},
        {id: 2, imageSrc: 'Piro/Piro-2.png'},
        {id: 3, imageSrc: 'Piro/Piro-3.png'},
        {id: 4, imageSrc: 'Piro/Piro-4.png'},
      ]
    },
    {
      id: 20, name: 'Ares', imageSrc: '', description: 'Durable and modern urban design elements.', subImages: [
        {id: 1, imageSrc: 'Ares/Ares-1.png'},
      ]
    },
    {
      id: 2, name: 'Quatro', imageSrc: '', description: 'Innovative urban furniture solutions for public spaces.', subImages: [
        {id: 1, imageSrc: 'Quatro/Quatro-1.png'},
        {id: 2, imageSrc: 'Quatro/Quatro-2.png'},
      ]
    },
    {
      id: 22, name: 'Leman', imageSrc: '', description: 'Elegant and durable urban furniture for various applications.', subImages: [
        {id: 1, imageSrc: 'Leman/Leman-1.png'},
        {id: 2, imageSrc: 'Leman/Leman-2.png'},
        {id: 3, imageSrc: 'Leman/Leman-3.png'},
        {id: 4, imageSrc: 'Leman/Leman-4.png'},
      ]
    },
    {
      id: 23, name: 'Polka', imageSrc: '', description: 'Stylish and functional urban design products.', subImages: [
        {id: 1, imageSrc: 'Polka/Polka-1.png'},
        {id: 2, imageSrc: 'Polka/Polka-2.png'},
      ]
    },
    {
      id: 24, name: 'Gavarras', imageSrc: '', description: 'Creative and artistic urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Gavarras/Gavarras-1.png'},
        {id: 2, imageSrc: 'Gavarras/Gavarras-2.png'},
        {id: 3, imageSrc: 'Gavarras/Gavarras-3.png'},
        {id: 4, imageSrc: 'Gavarras/Gavarras-4.png'},
      ]
    },
    {
      id: 25, name: 'Petrus', imageSrc: '', description: 'High-quality, durable urban design elements.', subImages: [
        {id: 1, imageSrc: 'Petrus/Petrus-1.png'},
        {id: 2, imageSrc: 'Petrus/Petrus-2.png'},
        {id: 3, imageSrc: 'Petrus/Petrus-3.png'},
        {id: 4, imageSrc: 'Petrus/Petrus-4.png'},
      ]
    },
    {
      id: 26, name: 'Okto', imageSrc: '', description: 'Modern and stylish urban furniture for public areas.', subImages: [
        {id: 1, imageSrc: 'Okto/Okto-1.png'},
        {id: 2, imageSrc: 'Okto/Okto-2.png'},
        {id: 3, imageSrc: 'Okto/Okto-3.png'},
        {id: 4, imageSrc: 'Okto/Okto-4.png'},
      ]
    },
    {
      id: 27, name: 'Flo', imageSrc: '', description: 'Elegant and functional urban design products.', subImages: [
        {id: 1, imageSrc: 'Flo/Flo-1.png'},
        {id: 2, imageSrc: 'Flo/Flo-2.png'},
        {id: 3, imageSrc: 'Flo/Flo-3.png'},
        {id: 4, imageSrc: 'Flo/Flo-4.png'},
      ]
    },
    {
      id: 28, name: 'Mielek', imageSrc: '', description: 'Durable and stylish urban furniture solutions.', subImages: [
        {id: 1, imageSrc: 'Mielek/Mielek-1.png'},
        {id: 2, imageSrc: 'Mielek/Mielek-2.png'},
        {id: 3, imageSrc: 'Mielek/Mielek-3.png'},
        {id: 4, imageSrc: 'Mielek/Mielek-4.png'},
      ]
    },
    {
      id: 29, name: 'Trax', imageSrc: '', description: 'Innovative and modern urban design elements.\n', subImages: [
        {id: 1, imageSrc: 'Trax/Trax-1.png'},
        {id: 2, imageSrc: 'Trax/Trax-2.png'},
        {id: 3, imageSrc: 'Trax/Trax-3.png'},
        {id: 4, imageSrc: 'Trax/Trax-4.png'},
      ]
    },
  ]
}
  ngOnInit(): void {
    this.selectedBenitoProduct = this.benitoProducts[1]
  }


}
