import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {Button, ButtonDirective} from "primeng/button";
import {ImageModule} from "primeng/image";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {AvatarModule} from "primeng/avatar";
import {Ripple} from "primeng/ripple";
import {Router} from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonDirective,
    ImageModule,
    Button,
    CardModule,
    FieldsetModule,
    AvatarModule,
    Ripple
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{

  responsiveOptions:any;
  services: any;

  constructor(private  _router:Router) {
    this.services = [
      {id: 1 , name: 'Landscape Design' , image:'Landscape-Design.jpg',
        description:'Expertly crafted 2D and 3D designs tailored to your vision, combining aesthetics and functionality for stunning outdoor spaces.'},
      {id: 2 , name: 'SoftScape' ,image:'Soft-Landscape.jpg',
        description:'Transform your outdoor area with lush plants, trees, and shrubs, creating sustainable and beautiful softscape solutions.'},
      {id: 3 , name: 'Nursery' ,image:'Nursery.jpg',
        description:' A wide selection of high-quality plants and garden products with expert advice to help you choose the best options for your landscape.'},
      {id: 4 , name: 'Irrigation' ,image:'Irrigation.jpeg',
        description:'Efficient systems designed to conserve water and ensure your landscape thrives, with customized installation and maintenance services.'},
      {id: 5 , name: 'Water Features' ,image:'Water-Features.jpg',
        description:'Elegant features like fountains and ponds that add tranquility and sophistication to your outdoor space, creating captivating aquatic elements.'},
      {id: 6 , name: 'Water & Drainage Systems' ,image:'Water-Systems.jpg',
        description:'Reliable systems to prevent waterlogging and manage runoff, ensuring proper water flow and soil health in your landscape.'},
      {id: 7 , name: 'HardScape' ,image:'Hard-Landscape.jpg',
        description:'Durable and stylish elements including patios, walkways, and retaining walls that complement and enhance your landscape design.'},
      {id: 8 , name: 'Maintenance' ,image:'Landscape-Maintenance.jpg',
        description:'Comprehensive plans to keep your landscape pristine year-round, covering everything from pruning to seasonal clean-ups.'},
      {id: 9 , name: 'Street Lighting' ,image:'Street-Lighting.jpg',
        description:'High-quality solutions for safety and aesthetic appeal, with energy-efficient installations for both public and private spaces.'},
      {id: 10 , name: 'Street Furniture' ,image:'Street-Furniture.jpg',
        description:'Functional and stylish furnishings that enhance urban spaces, including benches, bins, and other outdoor furniture.'},
      {id: 11 , name: 'Playground Equipment' ,image:'Playground-Equipment.jpg',
        description:'Safe and fun installations for children of all ages, designed for durability and enjoyment in various settings.'},
      {id: 12 , name: 'Covers and Grates' ,image:'covers-and-grates.jpg',
        description:'Sturdy solutions ensuring safety and proper drainage, blending seamlessly with your landscape design.'},
    ];

}

  ngOnInit(): void {


    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }


  navigateToServiceDetails(service:any) {
    this._router.navigate(['main/services/'+service.id]);
  }
}
