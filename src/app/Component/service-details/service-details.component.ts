import {Component, OnInit} from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {ListboxChangeEvent, ListboxModule} from "primeng/listbox";
import {FormsModule} from "@angular/forms";
import {GalleriaModule} from "primeng/galleria";
import {ImageModule} from "primeng/image";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [
    ButtonDirective,
    CardModule,
    PrimeTemplate,
    ListboxModule,
    FormsModule,
    GalleriaModule,
    ImageModule,
    ProgressSpinnerModule
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})
export class ServiceDetailsComponent implements OnInit {
  services: any[] = [];
  selectedServices: any;
  responsiveOptions: any[] | undefined;
  isLoading: boolean = true;
  showSelectedProduct: boolean =false;

  constructor(private route: ActivatedRoute) {
    this.services = [
      {
        id: 1, name: 'Landscape Design', image: 'Landscape-Design.webp',
        description: 'Expertly crafted 2D and 3D designs tailored to your vision, ' +
          'combining aesthetics and functionality for stunning outdoor spaces.',
        subImages: [
          {id: 1, image: 'design-landscape/design-landscape-4.webp'},
          {id: 2, image: 'design-landscape/design-landscape-2.webp'},
          {id: 3, image: 'design-landscape/design-landscape-3.webp'},
          {id: 4, image: 'design-landscape/design-landscape-1.webp'},
          {id: 5, image: 'design-landscape/design-landscape-5.webp'},
          {id: 6, image: 'design-landscape/design-landscape-6.webp'},

        ],
        whatWeDo: 'We create detailed 2D and 3D landscape designs tailored to your vision,' +
          ' ensuring a perfect blend of aesthetics and functionality. Our team collaborates' +
          ' with you to bring your dream outdoor space to life. We incorporate innovative ' +
          'design elements and the latest trends to maximize the beauty and usability of' +
          ' your landscape. Our design process begins with a comprehensive consultation ' +
          'to understand your preferences and requirements. We then develop a conceptual design,' +
          ' which we refine based on your feedback. Our final designs include detailed plans ' +
          'for plantings, hardscape elements, lighting, and irrigation. We also provide 3D ' +
          'visualizations to help you envision the finished project. Our goal is to create ' +
          'a harmonious and inviting outdoor environment that reflects your style and enhances' +
          ' your property’s value. We stay up-to-date with the latest landscaping technologies' +
          ' and materials to ensure our designs are both beautiful and sustainable. ' +
          'Whether you’re looking for a modern, minimalist garden or a lush, traditional ' +
          'landscape, we have the expertise to make your vision a reality.'
      },
      {
        id: 2, name: 'SoftScape', image: 'Soft-Landscape.webp',
        description: 'Transform your outdoor area with lush plants, trees, and shrubs, ' +
          'creating sustainable and beautiful softscape solutions.'
        , subImages: [
          {id: 1, image: 'soft-landscape/soft-landscape-1.webp'},
          {id: 2, image: 'soft-landscape/soft-landscape-2.webp'},
          {id: 3, image: 'soft-landscape/soft-landscape-3.webp'},
          {id: 4, image: 'soft-landscape/soft-landscape-4.webp'},
          {id: 5, image: 'soft-landscape/soft-landscape-5.webp'},
          {id: 6, image: 'soft-landscape/soft-landscape-6.webp'},

        ],
        whatWeDo: 'We enhance your outdoor area with carefully selected plants, ' +
          'trees, and shrubs. Our experts design sustainable softscape solutions' +
          ' that not only beautify your space but also promote ecological balance.' +
          ' We focus on using native and drought-tolerant species to create a low-maintenance' +
          ' and environmentally friendly landscape. Our softscape services include soil ' +
          'preparation, plant selection, installation, and ongoing care. We ensure that each ' +
          'plant is suited to its location and will thrive in your specific climate and' +
          ' soil conditions. By incorporating a variety of plant species, we create diverse' +
          ' and dynamic landscapes that change with the seasons. Our designs also consider' +
          ' factors such as color, texture, and form to create visually appealing compositions.' +
          ' In addition to aesthetic considerations, we prioritize the health and' +
          ' sustainability of your landscape. We use organic fertilizers and pest control' +
          ' methods to maintain the health of your plants and minimize environmental impact. ' +
          'Our softscape solutions are designed to provide long-term beauty and enjoyment' +
          ' with minimal maintenance.'
      },
      {
        id: 3, name: 'Nursery', image: 'Nursery.webp',
        description: ' A wide selection of high-quality plants and garden products with expert ' +
          'advice to help you choose the best options for your landscape.'
        , subImages: [
          {id: 1, image: 'nursery/nursery-landscape-1.webp'},
          {id: 2, image: 'nursery/nursery-landscape-2.webp'},
          {id: 3, image: 'nursery/nursery-landscape-3.webp'},
          {id: 4, image: 'nursery/nursery-landscape-4.webp'},
          {id: 5, image: 'nursery/nursery-landscape-5.webp'},
          {id: 6, image: 'nursery/nursery-landscape-6.webp'},

        ],
        whatWeDo: 'Our nursery provides a diverse selection of high-quality plants and garden' +
          ' products. We offer expert guidance to help you select the best plants for your' +
          ' specific landscape needs and conditions. Our nursery staff are knowledgeable ' +
          'about plant care and can assist with any horticultural questions you may have. ' +
          'We carry a wide range of plants, including annuals, perennials, shrubs, trees,' +
          ' and succulents. Our plants are sourced from reputable growers to ensure they ' +
          'are healthy and well-established. In addition to plants, we offer a variety of' +
          ' gardening supplies such as soil, mulch, fertilizers, and pots. We also provide' +
          ' custom potting services to help you create beautiful container gardens. Whether' +
          ' you’re looking for a specific plant or need advice on creating a garden from' +
          ' scratch, our nursery team is here to help. We offer delivery and planting ' +
          'services to make your gardening experience as convenient as possible. Visit ' +
          'our nursery to explore our selection and get inspired for your next gardening' +
          ' project'
      },
      {
        id: 4, name: 'Irrigation', image: 'Irrigation.webp',
        description: 'Efficient systems designed to conserve water and ensure your landscape thrives,' +
          ' with customized installation and maintenance services.'
        , subImages: [
          {id: 1, image: 'irrigation/irrigation-landscape-1.webp'},
          {id: 2, image: 'irrigation/irrigation-landscape-2.webp'},
          {id: 3, image: 'irrigation/irrigation-landscape-3.webp'},
          {id: 4, image: 'irrigation/irrigation-landscape-4.webp'},
          {id: 5, image: 'irrigation/irrigation-landscape-5.webp'},
          {id: 6, image: 'irrigation/irrigation-landscape-6.webp'},

        ],
        whatWeDo: 'We design and install efficient irrigation systems that conserve water ' +
          'while ensuring your plants receive the hydration they need. Our systems are' +
          ' customized to fit your landscape’s unique requirements. We begin with a ' +
          'thorough assessment of your property to determine the best irrigation solution.' +
          ' Our systems include drip irrigation, sprinklers, and smart controllers that' +
          ' adjust watering schedules based on weather conditions. We use high-quality ' +
          'components to ensure reliability and longevity. Our installation process is ' +
          'meticulous, minimizing disruption to your existing landscape. Once installed,' +
          ' we provide training on how to use and maintain your system. Regular maintenance' +
          ' is crucial to keep your irrigation system functioning optimally, and we offer ' +
          'comprehensive maintenance services to address any issues that arise. By ensuring' +
          ' your plants receive the right amount of water, our irrigation systems promote ' +
          'healthy growth and reduce water waste. Whether you need a new system installed' +
          ' or an existing one upgraded, our team has the expertise to deliver efficient ' +
          'and effective irrigation solutions.'

      },
      {
        id: 5, name: 'Water Features', image: 'Water-Features.webp',
        description: 'Elegant features like fountains and ponds that add tranquility ' +
          'and sophistication to your outdoor space, creating captivating aquatic elements.'
        , subImages: [
          {id: 1, image: 'water-features/water-features-1.webp'},
          {id: 2, image: 'water-features/water-features-2.webp'},
          {id: 3, image: 'water-features/water-features-3.webp'},
          {id: 4, image: 'water-features/water-features-4.webp'},
          {id: 5, image: 'water-features/water-features-5.webp'},
          {id: 6, image: 'water-features/water-features-6.webp'},


        ],
        whatWeDo: 'We design and install elegant water features such as fountains, ' +
          'ponds, and waterfalls. These features add a touch of tranquility and sophistication' +
          ' to your outdoor space, creating a serene environment. Our design process begins ' +
          'with a consultation to understand your vision and the characteristics of your space.' +
          ' We then create a custom design that complements your landscape and meets' +
          ' your aesthetic preferences. Our water features are constructed using high-quality ' +
          'materials and components to ensure durability and low maintenance. We incorporate' +
          ' elements such as lighting and landscaping to enhance the overall effect and ' +
          'create a cohesive look. Our team handles every aspect of the installation, ' +
          'from excavation to plumbing to finishing touches. After installation, ' +
          'we provide maintenance services to keep your water feature looking its best. ' +
          'Regular cleaning and upkeep are essential to prevent algae buildup and ensure' +
          ' the water remains clear and beautiful. Whether you want a simple bubbling' +
          ' fountain or a complex multi-tiered waterfall, we have the skills and experience' +
          ' to create the perfect water feature for your landscape.'
      },
      {
        id: 6, name: 'Water & Drainage Systems', image: 'Water-Systems.webp',
        description: 'Reliable systems to prevent waterlogging and manage runoff,' +
          ' ensuring proper water flow and soil health in your landscape.'
        , subImages: [
          {id: 1, image: 'water-drainage-systems/water-drainage-systems-1.webp'},
          {id: 2, image: 'water-drainage-systems/water-drainage-systems-2.webp'},
          {id: 3, image: 'water-drainage-systems/water-drainage-systems-3.webp'},
          {id: 4, image: 'water-drainage-systems/water-drainage-systems-4.webp'},
          {id: 5, image: 'water-drainage-systems/water-drainage-systems-5.webp'},
          {id: 6, image: 'water-drainage-systems/water-drainage-systems-6.webp'},

        ],
        whatWeDo: 'We implement reliable water and drainage systems to prevent waterlogging and manage runoff. ' +
          'Our solutions ensure' +
          ' proper water flow and soil health, protecting your landscape from damage.' +
          ' We start with a detailed site assessment to identify potential drainage issues ' +
          'and design an effective solution. Our systems include French drains, channel drains,' +
          ' dry wells, and sump pumps, tailored to the specific needs of your property.' +
          ' Proper installation is critical to the performance of drainage systems,' +
          ' and our team ensures each component is correctly placed and connected.' +
          ' In addition to installation, we offer maintenance services to keep your ' +
          'drainage system functioning efficiently. Regular inspections and cleaning are' +
          ' essential to prevent clogs and other issues. By managing water effectively, ' +
          'our drainage solutions protect your landscape from erosion and water damage. ' +
          'We also offer solutions for rainwater harvesting, allowing you to capture and' +
          ' reuse rainwater for irrigation and other purposes. Our goal is to create a ' +
          'sustainable and resilient landscape that can withstand heavy rainfall and other ' +
          'environmental challenges.'
      },
      {
        id: 7, name: 'HardScape', image: 'Hard-Landscape.webp',
        description: 'Durable and stylish elements including patios, walkways, ' +
          'and retaining walls that complement and enhance your landscape design.'
        , subImages: [
          {id: 1, image: 'hard-landscape/hard-landscape-1.webp'},
          {id: 2, image: 'hard-landscape/hard-landscape-2.webp'},
          {id: 3, image: 'hard-landscape/hard-landscape-3.webp'},
          {id: 4, image: 'hard-landscape/hard-landscape-4.webp'},
          {id: 5, image: 'hard-landscape/hard-landscape-5.webp'},
          {id: 6, image: 'hard-landscape/hard-landscape-6.webp'},
        ],
        whatWeDo: 'We construct durable and aesthetically pleasing hardscape elements like patios,' +
          ' walkways, and retaining walls. These features provide structure and functionality, ' +
          'enhancing your overall landscape design. Our hardscape services begin with a design ' +
          'consultation to understand your needs and preferences. We then create detailed plans ' +
          'and select high-quality materials that complement your existing landscape. Our skilled ' +
          'craftsmen handle every aspect of the construction process, ensuring precision and attention ' +
          'to detail. We use durable materials such as stone, brick, and concrete to create hardscapes' +
          ' that are built to last. In addition to construction, we offer repair and maintenance services' +
          ' to keep your hardscape elements in top condition. Proper maintenance is essential to prevent' +
          ' issues such as cracking and shifting. Our hardscape solutions are designed to enhance the ' +
          'usability and beauty of your outdoor space, providing areas for relaxation, entertainment,' +
          ' and enjoyment. Whether you’re looking to add a new patio, walkway, or retaining wall, ' +
          'our team has the expertise to deliver exceptional results.'
      },
      {
        id: 8, name: 'Maintenance', image: 'Landscape-Maintenance.webp',
        description: 'Comprehensive plans to keep your landscape pristine year-round,' +
          ' covering everything from pruning to seasonal clean-ups.'
        , subImages: [
          {id: 1, image: 'maintenance-landscape/maintenance-landscape-1.webp'},
          {id: 2, image: 'maintenance-landscape/maintenance-landscape-2.webp'},
          {id: 3, image: 'maintenance-landscape/maintenance-landscape-3.webp'},
          {id: 4, image: 'maintenance-landscape/maintenance-landscape-4.webp'},
          {id: 5, image: 'maintenance-landscape/maintenance-landscape-5.webp'},
          {id: 6, image: 'maintenance-landscape/maintenance-landscape-6.webp'},
        ],
        whatWeDo: 'We offer comprehensive maintenance plans to keep your landscape looking its best year-round.' +
          ' Our services include pruning, mowing, fertilization, pest control,' +
          ' and seasonal clean-ups. Our maintenance plans are tailored to meet the specific needs of your' +
          ' landscape, ensuring your plants and lawn remain healthy and vibrant. We use professional-grade' +
          ' equipment and environmentally friendly practices to provide the highest level of care. Our team ' +
          'is trained to identify and address issues such as disease, pests, and nutrient deficiencies before' +
          ' they become serious problems. Regular maintenance visits ensure your landscape remains neat ' +
          'and well-groomed, enhancing its overall appearance and value. In addition to routine maintenance,' +
          ' we offer specialized services such as aeration, overseeding, and soil testing to promote healthy' +
          ' growth. Our goal is to create a beautiful and thriving landscape that you can enjoy year-round ' +
          'without the hassle of upkeep. Whether you need a one-time clean-up or ongoing maintenance, ' +
          'our team is here to provide expert care and attention to your landscape.'
      },
      {
        id: 9, name: 'Street Lighting', image: 'Street-Lighting.webp',
        description: 'High-quality solutions for safety and aesthetic appeal, with energy-efficient ' +
          'installations for both public and private spaces.'
        , subImages: [
          {id: 1, image: 'street-lighting/street-lighting-1.webp'},
          {id: 2, image: 'street-lighting/street-lighting-2.webp'},
          {id: 3, image: 'street-lighting/street-lighting-3.webp'},
          {id: 4, image: 'street-lighting/street-lighting-4.webp'},
          {id: 5, image: 'street-lighting/street-lighting-5.webp'},
          {id: 6, image: 'street-lighting/street-lighting-6.webp'},

        ],
        whatWeDo: 'We install and maintain high-quality street lighting solutions that enhance safety' +
          ' and aesthetic appeal. Our energy-efficient lighting systems are suitable for both public ' +
          'and private spaces. We offer a range of lighting styles and technologies, including LED lights,' +
          ' solar-powered lights, and smart lighting systems. Our design process includes a thorough assessment' +
          ' of your lighting needs and the characteristics of your space. We then create a custom lighting plan' +
          ' that maximizes visibility and enhances the overall aesthetic of the area. Our installation ' +
          'team ensures each light is correctly placed and securely installed for optimal performance. ' +
          'In addition to installation, we provide maintenance services to keep your lighting system ' +
          'functioning efficiently. Regular inspections and cleaning are essential to ensure the lights' +
          ' remain bright and reliable. Our energy-efficient solutions help reduce energy consumption' +
          ' and lower utility costs. Whether you need lighting for a residential community, commercial' +
          ' property, or public space, our team has the expertise to deliver effective and attractive ' +
          'lighting solutions.'
      },
      {
        id: 10, name: 'Street Furniture', image: 'Street-Furniture.webp',
        description: 'Functional and stylish furnishings that enhance urban spaces, including benches, bins, and other outdoor furniture.'
        , subImages: [
          {id: 1, image: 'street-furniture/street-furniture-1.webp'},
          {id: 2, image: 'street-furniture/street-furniture-2.webp'},
          {id: 3, image: 'street-furniture/street-furniture-3.webp'},
          {id: 4, image: 'street-furniture/street-furniture-4.webp'},
          {id: 5, image: 'street-furniture/street-furniture-5.webp'},
          {id: 6, image: 'street-furniture/street-furniture-6.webp'},

        ],
        whatWeDo: 'We provide functional and stylish street furniture, including benches, bins,' +
          ' and bike racks. Our products are designed to enhance the usability and' +
          ' aesthetic of urban and community spaces. We work with durable,' +
          ' weather-resistant materials to ensure longevity and minimal maintenance.' +
          ' Our design process includes a thorough assessment of the space and its intended use' +
          ' to create custom furniture solutions that meet your specific needs. Our installation ' +
          'team ensures each piece of furniture is securely and correctly installed for safety and usability.' +
          ' In addition to standard products, we offer custom design services to create unique ' +
          'pieces that reflect the character and style of your space. Our street furniture solutions ' +
          'are designed to create inviting and functional outdoor environments that encourage ' +
          'community interaction and enjoyment. Whether you need benches for a park, bins for' +
          ' a commercial area, or bike racks for a residential community, our team has the ' +
          'expertise to deliver high-quality and attractive street furniture.'
      },
      {
        id: 11, name: 'Playground Equipment', image: 'Playground-Equipment.webp',
        description: 'Safe and fun installations for children of all ages, designed for durability and enjoyment in various settings.'
        , subImages: [
          {id: 1, image: 'playground-equipment/playground-equipment-1.webp'},
          {id: 2, image: 'playground-equipment/playground-equipment-2.webp'},
          {id: 3, image: 'playground-equipment/playground-equipment-3.webp'},
          {id: 4, image: 'playground-equipment/playground-equipment-4.webp'},

        ],
        whatWeDo: ' We design and install safe, durable, and engaging playground equipment ' +
          'for children of all ages. Our installations meet the highest safety standards and' +
          ' provide enjoyable play experiences. We begin by assessing your space and understanding' +
          ' the needs of the children who will use the playground. Our designs incorporate a variety ' +
          'of play elements, including swings, slides, climbing structures, and interactive features.' +
          ' We use high-quality, weather-resistant materials to ensure the equipment remains safe ' +
          'and attractive for years. Our installation team ensures that all components are securely ' +
          'anchored and meet all relevant safety regulations. In addition to installation,' +
          ' we offer regular maintenance and safety inspections to keep the playground in excellent condition. ' +
          'Our goal is to create a fun, stimulating, and safe environment where children can play, ' +
          'learn, and grow. Whether you need equipment for a school, park, or residential area,' +
          ' our team has the expertise to create the perfect playground for your needs.'
      },
      {
        id: 12, name: 'Covers and Grates', image: 'covers-and-grates.webp',
        description: 'Sturdy solutions ensuring safety and proper drainage, blending seamlessly with your landscape design.'
        , subImages: [
          {id: 1, image: 'covers-and-grates/covers-and-grates-1.webp'},
          {id: 2, image: 'covers-and-grates/covers-and-grates-2.webp'},
          {id: 3, image: 'covers-and-grates/covers-and-grates-3.webp'},
          {id: 4, image: 'covers-and-grates/covers-and-grates-4.webp'},
          {id: 5, image: 'covers-and-grates/covers-and-grates-5.webp'},
          {id: 6, image: 'covers-and-grates/covers-and-grates-6.webp'},

        ],
        whatWeDo: 'We supply and install robust covers and grates that ensure safety and efficient drainage in your landscape.' +
          ' Our solutions are designed to blend seamlessly with your ' +
          'outdoor design while providing essential functionality. We start with a thorough site' +
          ' assessment to identify areas that require drainage solutions. ' +
          'Our covers and grates are made from high-quality materials that are durable and resistant to wear and tear. We offer' +
          ' a variety of styles and finishes to match your landscape aesthetic. ' +
          'Our installation process ensures that each cover and grate is properly positioned and securely fixed to prevent ' +
          'movement and potential hazards. Regular maintenance services are available to ensure the' +
          ' drainage systems remain clear and functional. Our solutions help prevent water' +
          ' accumulation and protect your landscape from erosion and damage. Whether you need covers' +
          ' and grates for a residential garden, commercial property, or public space, our team is dedicated ' +
          'to providing reliable and visually appealing drainage solutions.'
      },
    ];
  }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4
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
    this.getServices();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


  private getServices() {
    this.selectedServices = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedServices = this.services.find(value => value.id == Number(id))
  }

  onChangeServices(event: ListboxChangeEvent) {

    if (event.value) {
      this.showSelectedProduct = false
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.selectedServices = event.value;
    }else{
      this.showSelectedProduct= true;
      this.selectedServices=[]
    }
  }
}
