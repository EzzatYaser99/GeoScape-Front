import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {ListboxModule} from "primeng/listbox";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ImageModule} from "primeng/image";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [
    GalleriaModule,
    ListboxModule,
    PrimeTemplate,
    FormsModule,
    ImageModule,
    ButtonDirective,
    CardModule
  ],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectsDetailsComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any;
  responsiveOptions: any[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.projects = [
      {id: 1 ,
        name: 'NEOM Residential Community 1 (NRC 1)' ,
        image:'neom-projects/NRC1/nrc-1.jpg',
        scopeOfWork:' Softscape, Hardscape, and Irrigation system',
        mainContractor:'Nesma & Partners',
        consultant:'Bechtel',
        progress:'99.0%',
        status:'Ongoing',
        description:'This project involves the comprehensive landscaping and irrigation of a residential' +
          ' community. It includes designing and implementing softscaping elements like grass, trees,' +
          ' and shrubs, as well as hardscaping features such as pathways, patios, and other structures.' +
          ' The irrigation system ensures sustainable water management.',
      subImages: [
      {id: 1, image: 'neom-projects/NRC1/nrc-1.jpg'},
      {id: 2, image: 'neom-projects/NRC1/nrc-2.jpg'},
      {id: 3, image: 'neom-projects/NRC1/nrc-3.jpg'},
      {id: 4, image: 'neom-projects/NRC1/nrc-4.jpg'},
      {id: 5, image: 'neom-projects/NRC1/nrc-5.jpg'},
      {id: 6, image: 'neom-projects/NRC1/nrc-6.jpg'},
      {id: 7, image: 'neom-projects/NRC1/nrc-7.jpg'},
      {id: 8, image: 'neom-projects/NRC1/nrc-8.jpg'},

    ]},
      {id: 2 ,
        name: 'NEOM Residential Community 2 (NRC 2)' ,
        image:'',
        scopeOfWork:' Softscape, Hardscape, and Irrigation system',
        mainContractor:'Nesma & Partners',
        consultant:'Bechtel',
        progress:'95.0%',
        status:'Ongoing',
        description:'Similar to NRC 1, this project focuses on enhancing the landscape and irrigation' +
          ' infrastructure of another residential community. Our team is creating aesthetically' +
          ' pleasing and functional outdoor spaces that contribute to the overall well-being of the residents.'},
      {id: 3 ,
        name: 'Infrastructure Package for Staff Accommodation (4200000151/001)' ,
        image:'',
        scopeOfWork:' Softscape, Hardscape, and Irrigation system',
        mainContractor:'PCC',
        consultant:'AECOM',
        progress:'10.0%',
        status:'Ongoing',
        description:'This project is aimed at improving the living conditions for staff through advanced ' +
          'landscaping and irrigation solutions. It includes the creation of green spaces, ' +
          'recreational areas, and efficient irrigation systems to support a comfortable living environment'},
      {id: 4 ,
        name: 'Oxagon to Red Desert Early Works Roads Package 1 (WO#49)' ,
        image:'',
        scopeOfWork:'Native Tree Transplanting',
        mainContractor:'SAPAC',
        consultant:'Bechtel',
        progress:'100.0%',
        status:'Completed',
        description:'This project involved the transplanting of native trees as part of the early works for ' +
          'road construction. The aim was to preserve the local flora while facilitating the development' +
          ' of new infrastructure.'},
      {id: 5 ,
        name: 'Oxagon to Red Desert Early Works Construction of Access Roads Package 2 (WO#50)' ,
        image:'',
        scopeOfWork:'Native Tree Transplanting',
        mainContractor:'SAPAC',
        consultant:'Bechtel',
        progress:'100.0%',
        status:'Completed',
        description:' Following the success of Package 1, this project continued the effort to transplant' +
          ' native trees during the construction of access roads. The focus was on minimizing environmental ' +
          'impact while enabling essential infrastructure development.'},
      {id: 6 ,
        name: 'Advanced Enabling Works (Phase 1) (WO#53)' ,
        image:'',
        scopeOfWork:'Native Tree Transplanting',
        mainContractor:'AECOM',
        consultant:'Bechtel',
        progress:'100.0%',
        status:'Completed',
        description:'This project involved advanced enabling works that required the careful ' +
          'transplantation of native trees. Our team ensured that the trees were moved and replanted ' +
          'in a manner that preserved their health and supported the overall environmental goals of the project.'},
      {id: 7 ,
        name: 'Sindalah Island – Marina Promenade & Utility Backbone (000001020/147)' ,
        image:'neom-projects/sindalah-island/sindalah-island-1.JPG',
        scopeOfWork:'Softscape and Irrigation system',
        mainContractor:'Nesma & Partners',
        consultant:'AECOM',
        progress:'30.0%',
        status:'Ongoing',
        description:' This project is focused on developing the marina promenade. It includes ' +
          'extensive softscaping and the installation of' +
          ' an advanced irrigation system to ensure the maintenance of lush, green landscapes.',
        subImages: [
          {id: 1, image: 'neom-projects/sindalah-island/sindalah-island-1.JPG'},
          {id: 2, image: 'neom-projects/sindalah-island/sindalah-island-2.JPG'},
          {id: 3, image: 'neom-projects/sindalah-island/sindalah-island-3.JPG'},
          {id: 4, image: 'neom-projects/sindalah-island/sindalah-island-4.JPG'},
          {id: 5, image: 'neom-projects/sindalah-island/sindalah-island-5.JPG'},
          {id: 6, image: 'neom-projects/sindalah-island/sindalah-island-6.JPG'},
          {id: 7, image: 'neom-projects/sindalah-island/sindalah-island-7.JPG'},
          {id: 8, image: 'neom-projects/sindalah-island/sindalah-island-8.JPG'},


        ]},
      {id: 8 ,
        name: 'Sindalah Island – Cluster 1' ,
        image:'',
        scopeOfWork:'Supply of Plants',
        mainContractor:' Nesma & Partners',
        consultant:'AECOM',
        progress:'30.0%',
        status:'Ongoing',
        description:'Geoscape is responsible for supplying a diverse range of plants for Cluster 1 on Sindalah' +
          ' Island. This project aims to enhance the island\'s natural beauty and support biodiversity through' +
          ' the introduction of various plant species'},
      {id: 9 ,
        name: 'NEOM Company – The LINE (WO 4200000127-02)' ,
        image:'',
        scopeOfWork:' Native Tree Transplanting',
        mainContractor:'FMSCO',
        consultant:'Bechtel',
        progress:' 100.0%',
        status:'Completed',
        description:'As part of the ambitious NEOM project, The LINE required the transplantation' +
          ' of native trees to preserve the natural landscape. Geoscape successfully' +
          ' completed this task, ensuring that the environmental integrity of the area was maintained.'},
      {id: 10 ,
        name: 'Infrastructure and Public Buildings on Prince Mohammad Bin Salman Road – Phase 1 Section 2 ' +
          '(Package 2B) of the Sports Boulevard Project in Riyadh City (Cycle Bridge)' ,
        image:'riyadh-projects/cycle-bridge/cycle-bridge-1.jpeg',
        scopeOfWork:' Softscape and Irrigation system',
        mainContractor:'Freyssinet',
        consultant:'IDOM',
        progress:'99.0%',
        status:'Ongoing',
        description:'This project involves the comprehensive landscaping and irrigation of a residential' +
          ' community. It includes designing and implementing softscaping elements like grass, trees,' +
          ' and shrubs, as well as hardscaping features such as pathways, patios, and other structures.' +
          ' The irrigation system ensures sustainable water management.',
        subImages: [
          {id: 1, image: 'riyadh-projects/cycle-bridge/cycle-bridge-1.jpeg'},
          {id: 2, image: 'riyadh-projects/cycle-bridge/cycle-bridge-2.jpeg'},
          {id: 3, image: 'riyadh-projects/cycle-bridge/cycle-bridge-3.jpeg'},
          {id: 4, image: 'riyadh-projects/cycle-bridge/cycle-bridge-4.jpeg'},
          {id: 5, image: 'riyadh-projects/cycle-bridge/cycle-bridge-5.jpeg'},
          {id: 6, image: 'riyadh-projects/cycle-bridge/cycle-bridge-6.jpeg'},
          {id: 7, image: 'riyadh-projects/cycle-bridge/cycle-bridge-7.jpeg'},
          {id: 8, image: 'riyadh-projects/cycle-bridge/cycle-bridge-8.jpeg'},



        ]

      },
      {
        id: 11,
        name: 'Roads, Infrastructure and Public Buildings on Zones 3, 4 & 5 of the Arts District (F3) -' +
          ' Works executed in Wadi Hanifah areas as part of POD18 of the Sports Boulevard Project in ' +
          'Riyadh City',
        image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-7.jpeg',
        scopeOfWork: ' Softscape and Irrigation system',
        mainContractor: 'Freyssinet',
        consultant: 'IDOM',
        progress: '80.0%',
        status: 'Ongoing',
        description: ' This project focuses on enhancing the landscape in the Arts District of Riyadh, specifically within the Wadi Hanifah' +
          ' areas. Our work includes the softscaping of green areas and the implementation of efficient irrigation systems to support the' +
          ' city\'s environmental and aesthetic goals',
        subImages: [
          {id: 1, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-1.jpeg'},
          {id: 2, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-2.jpeg'},
          {id: 3, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-3.jpeg'},
          {id: 4, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-4.jpeg'},
          {id: 5, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-5.jpeg'},
          {id: 6, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-6.jpeg'},
          {id: 7, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-7.jpeg'},
          {id: 8, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-8.jpeg'},
        ]
      },
      {id: 12 ,
        name: 'Ministry of Finance' ,
        image:'riyadh-projects/ministry-of-finance/ministry-of-finance-1.jpeg',
        scopeOfWork:'Softscape and Irrigation system',
        mainContractor:'Ministry of Finance',
        consultant:'Ministry of Finance',
        progress:'70.0%',
        status:'Ongoing',
        description:
          'Geoscape is tasked with the landscaping and irrigation work for the ' +
          'Ministry of Finance\'s premises. This project aims to create a serene ' +
          'and well-maintained environment that reflects the prestige of the ministry' +
          ' while ensuring sustainable water usage through advanced irrigation techniques.',
        subImages: [
          {id: 1, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-1.jpeg'},
          {id: 2, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-2.jpeg'},
          {id: 3, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-3.jpeg'},
          {id: 4, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-4.jpeg'},
          {id: 5, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-5.jpeg'},
          {id: 6, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-6.jpeg'},
        ]
      }

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

  }


  private getServices() {
    this.selectedProject = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedProject = this.projects.find(value => value.id == Number(id))
  }
}
