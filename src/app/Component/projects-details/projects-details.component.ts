import {Component, OnInit} from '@angular/core';
import {GalleriaModule} from "primeng/galleria";
import {ListboxModule} from "primeng/listbox";
import {PrimeTemplate} from "primeng/api";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ImageModule} from "primeng/image";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {Ripple} from "primeng/ripple";

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
    CardModule,
    ProgressSpinnerModule,
    Ripple,
    RouterLink
  ],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.scss'
})
export class ProjectsDetailsComponent implements OnInit {

  projects: any[] = [];
  selectedProject: any;
  responsiveOptions: any[] | undefined;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute) {
    this.projects = [
      {id: 1 ,
        name: 'NEOM Residential Community 1 (NRC 1)' ,
        image:'neom-projects/NRC1/nrc-1.webp',
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
      {id: 1, image: 'neom-projects/NRC1/nrc-1.webp'},
      {id: 2, image: 'neom-projects/NRC1/nrc-2.webp'},
      {id: 3, image: 'neom-projects/NRC1/nrc-3.webp'},
      {id: 4, image: 'neom-projects/NRC1/nrc-4.webp'},
      {id: 5, image: 'neom-projects/NRC1/nrc-5.webp'},
      {id: 6, image: 'neom-projects/NRC1/nrc-6.webp'},
      {id: 7, image: 'neom-projects/NRC1/nrc-7.webp'},
      {id: 8, image: 'neom-projects/NRC1/nrc-8.webp'},

    ]},
      {id: 2 ,
        name: 'NEOM Residential Community 2 (NRC 2)' ,
        image:'neom-projects/NRC2/nrc-5.webp',
        scopeOfWork:' Softscape, Hardscape, and Irrigation system',
        mainContractor:'Nesma & Partners',
        consultant:'Bechtel',
        progress:'95.0%',
        status:'Ongoing',
        description:'Similar to NRC 1, this project focuses on enhancing the landscape and irrigation' +
          ' infrastructure of another residential community. Our team is creating aesthetically' +
          ' pleasing and functional outdoor spaces that contribute to the overall well-being of the residents.',
        subImages: [
          {id: 1, image: 'neom-projects/NRC2/nrc-1.webp'},
          {id: 2, image: 'neom-projects/NRC2/nrc-2.webp'},
          {id: 3, image: 'neom-projects/NRC2/nrc-3.webp'},
          {id: 4, image: 'neom-projects/NRC2/nrc-4.webp'},
          {id: 5, image: 'neom-projects/NRC2/nrc-5.webp'},
          {id: 6, image: 'neom-projects/NRC2/nrc-6.webp'},
          {id: 7, image: 'neom-projects/NRC2/nrc-7.webp'},
          {id: 8, image: 'neom-projects/NRC2/nrc-8.webp'},
          {id: 9, image: 'neom-projects/NRC2/nrc-9.webp'},

        ]},
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
          'recreational areas, and efficient irrigation systems to support a comfortable living environment',
        subImages: [
          {id: 1, image: 'neom-projects/infrastructure-package/work-in-progress.webp'},
        ]},
      {id: 4 ,
        name: 'Oxagon to Red Desert Early Works Roads Package 1 (WO#49)' ,
        image:'neom-projects/wo49/wo49-7.webp',
        scopeOfWork:'Native Tree Transplanting',
        mainContractor:'SAPAC',
        consultant:'Bechtel',
        progress:'100.0%',
        status:'Completed',
        description:'This project involved the transplanting of native trees as part of the early works for ' +
          'road construction. The aim was to preserve the local flora while facilitating the development' +
          ' of new infrastructure.',
        subImages: [
          {id: 1, image: 'neom-projects/wo49/wo49-1.webp'},
          {id: 2, image: 'neom-projects/wo49/wo49-2.webp'},
          {id: 3, image: 'neom-projects/wo49/wo49-3.webp'},
          {id: 4, image: 'neom-projects/wo49/wo49-4.webp'},
          {id: 5, image: 'neom-projects/wo49/wo49-5.webp'},
          {id: 6, image: 'neom-projects/wo49/wo49-6.webp'},
          {id: 7, image: 'neom-projects/wo49/wo49-7.webp'},
          {id: 8, image: 'neom-projects/wo49/wo49-8.webp'},
          {id: 9, image: 'neom-projects/wo49/wo49-9.webp'},
          {id: 10, image: 'neom-projects/wo49/wo49-10.webp'},

        ]},
      {id: 5 ,
        name: 'Oxagon to Red Desert Early Works Construction of Access Roads Package 2 (WO#50)' ,
        image:'neom-projects/wo50/wo50-8.webp',
        scopeOfWork:'Native Tree Transplanting',
        mainContractor:'SAPAC',
        consultant:'Bechtel',
        progress:'100.0%',
        status:'Completed',
        description:' Following the success of Package 1, this project continued the effort to transplant' +
          ' native trees during the construction of access roads. The focus was on minimizing environmental ' +
          'impact while enabling essential infrastructure development.',
        subImages: [
          {id: 1, image: 'neom-projects/wo50/wo50-1.webp'},
          {id: 2, image: 'neom-projects/wo50/wo50-2.webp'},
          {id: 3, image: 'neom-projects/wo50/wo50-3.webp'},
          {id: 4, image: 'neom-projects/wo50/wo50-4.webp'},
          {id: 5, image: 'neom-projects/wo50/wo50-5.webp'},
          {id: 6, image: 'neom-projects/wo50/wo50-6.webp'},
          {id: 7, image: 'neom-projects/wo50/wo50-7.webp'},
          {id: 8, image: 'neom-projects/wo50/wo50-8.webp'},
          {id: 9, image: 'neom-projects/wo50/wo50-9.webp'},
          {id: 10, image: 'neom-projects/wo50/wo50-10.webp'},
          {id: 11, image: 'neom-projects/wo50/wo50-10.webp'},
          {id: 12, image: 'neom-projects/wo50/wo50-10.webp'},
          {id: 13, image: 'neom-projects/wo50/wo50-10.webp'},
          {id: 14, image: 'neom-projects/wo50/wo50-10.webp'},
          {id: 15, image: 'neom-projects/wo50/wo50-10.webp'},

        ]},
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
          'in a manner that preserved their health and supported the overall environmental goals of the project.',
        subImages: [
          {id: 1, image: 'neom-projects/wo53/wo53-1.webp'},
          {id: 2, image: 'neom-projects/wo53/wo53-2.webp'},
          {id: 3, image: 'neom-projects/wo53/wo53-3.webp'},
          {id: 4, image: 'neom-projects/wo53/wo53-4.webp'},
          {id: 5, image: 'neom-projects/wo53/wo53-5.webp'},
          {id: 6, image: 'neom-projects/wo53/wo53-6.webp'},


        ]
      },
      {id: 7 ,
        name: 'Sindalah Island – Marina Promenade & Utility Backbone (000001020/147)' ,
        image:'neom-projects/sindalah-island/sindalah-island-1.webp',
        scopeOfWork:'Softscape and Irrigation system',
        mainContractor:'Nesma & Partners',
        consultant:'AECOM',
        progress:'30.0%',
        status:'Ongoing',
        description:' This project is focused on developing the marina promenade. It includes ' +
          'extensive softscaping and the installation of' +
          ' an advanced irrigation system to ensure the maintenance of lush, green landscapes.',
        subImages: [
          {id: 1, image: 'neom-projects/sindalah-island/sindalah-island-1.webp'},
          {id: 2, image: 'neom-projects/sindalah-island/sindalah-island-2.webp'},
          {id: 3, image: 'neom-projects/sindalah-island/sindalah-island-3.webp'},
          {id: 4, image: 'neom-projects/sindalah-island/sindalah-island-4.webp'},
          {id: 5, image: 'neom-projects/sindalah-island/sindalah-island-5.webp'},
          {id: 6, image: 'neom-projects/sindalah-island/sindalah-island-6.webp'},
          {id: 7, image: 'neom-projects/sindalah-island/sindalah-island-7.webp'},
          {id: 8, image: 'neom-projects/sindalah-island/sindalah-island-8.webp'},

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
          ' the introduction of various plant species',
        subImages: [
          {id: 1, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-1.webp'},
          {id: 2, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-2.webp'},
          {id: 3, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-3.webp'},
          {id: 4, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-4.webp'},
          {id: 5, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-5.webp'},
          {id: 6, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-6.webp'},
          {id: 7, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-7.webp'},
          {id: 8, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-8.webp'},
          {id: 9, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-9.webp'},
          {id: 10, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-10.webp'},
          {id: 11, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-11.webp'},
          {id: 12, image: 'neom-projects/sindalah-Island-cluster/sindalah-Island-cluster-12.webp'},

        ]},
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
          ' completed this task, ensuring that the environmental integrity of the area was maintained.',
        subImages: [
          {id: 1, image: 'neom-projects/wo42/wo42-1.webp'},
          {id: 2, image: 'neom-projects/wo42/wo42-2.webp'},
          {id: 3, image: 'neom-projects/wo42/wo42-3.webp'},
          {id: 4, image: 'neom-projects/wo42/wo42-4.webp'},
          {id: 5, image: 'neom-projects/wo42/wo42-5.webp'},
          {id: 6, image: 'neom-projects/wo42/wo42-6.webp'},
          {id: 7, image: 'neom-projects/wo42/wo42-7.webp'},
          {id: 8, image: 'neom-projects/wo42/wo42-8.webp'},
        ]},
      {id: 10 ,
        name: 'Infrastructure and Public Buildings on Prince Mohammad Bin Salman Road – Phase 1 Section 2 ' +
          '(Package 2B) of the Sports Boulevard Project in Riyadh City (Cycle Bridge)' ,
        image:'riyadh-projects/cycle-bridge/cycle-bridge-1.webp',
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
          {id: 1, image: 'riyadh-projects/cycle-bridge/cycle-bridge-1.webp'},
          {id: 2, image: 'riyadh-projects/cycle-bridge/cycle-bridge-2.webp'},
          {id: 3, image: 'riyadh-projects/cycle-bridge/cycle-bridge-3.webp'},
          {id: 4, image: 'riyadh-projects/cycle-bridge/cycle-bridge-4.webp'},
          {id: 5, image: 'riyadh-projects/cycle-bridge/cycle-bridge-5.webp'},
          {id: 6, image: 'riyadh-projects/cycle-bridge/cycle-bridge-6.webp'},
          {id: 7, image: 'riyadh-projects/cycle-bridge/cycle-bridge-7.webp'},
          {id: 8, image: 'riyadh-projects/cycle-bridge/cycle-bridge-8.webp'},



        ]

      },
      {
        id: 11,
        name: 'Roads, Infrastructure and Public Buildings on Zones 3, 4 & 5 of the Arts District (F3) -' +
          ' Works executed in Wadi Hanifah areas as part of POD18 of the Sports Boulevard Project in ' +
          'Riyadh City',
        image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-7.webp',
        scopeOfWork: ' Softscape and Irrigation system',
        mainContractor: 'Freyssinet',
        consultant: 'IDOM',
        progress: '80.0%',
        status: 'Ongoing',
        description: ' This project focuses on enhancing the landscape in the Arts District of Riyadh, specifically within the Wadi Hanifah' +
          ' areas. Our work includes the softscaping of green areas and the implementation of efficient irrigation systems to support the' +
          ' city\'s environmental and aesthetic goals',
        subImages: [
          {id: 1, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-1.webp'},
          {id: 2, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-2.webp'},
          {id: 3, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-3.webp'},
          {id: 4, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-4.webp'},
          {id: 5, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-5.webp'},
          {id: 6, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-6.webp'},
          {id: 7, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-7.webp'},
          {id: 8, image: 'riyadh-projects/wadi-hanifa/wadi-hanifa-8.webp'},
        ]
      },
      {id: 12 ,
        name: 'Ministry of Finance' ,
        image:'riyadh-projects/ministry-of-finance/ministry-of-finance-1.webp',
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
          {id: 1, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-1.webp'},
          {id: 2, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-2.webp'},
          {id: 3, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-3.webp'},
          {id: 4, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-4.webp'},
          {id: 5, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-5.webp'},
          {id: 6, image: 'riyadh-projects/ministry-of-finance/ministry-of-finance-6.webp'},
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
    this.getProjects();
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }


  private getProjects() {
    this.selectedProject = []
    let id: string | null = this.route
      .snapshot
      .paramMap
      .get('id');
    this.selectedProject = this.projects.find(value => value.id == Number(id))
  }
}
