import {Component, OnInit} from '@angular/core';
import {AvatarModule} from "primeng/avatar";
import {FieldsetModule} from "primeng/fieldset";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AvatarModule,
    FieldsetModule,
    PrimeTemplate,
    ButtonDirective,
    CardModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  projects: any;
constructor(private  _router:Router) {
  this.projects = [
    {id: 1 ,
      name: 'NEOM Residential Community 1 (NRC 1)' ,
      image:'',
      scopeOfWork:' Softscape, Hardscape, and Irrigation system',
      mainContractor:'Nesma & Partners',
      consultant:'Bechtel',
      progress:'99.0%',
      status:'Ongoing',
      description:'This project involves the comprehensive landscaping and irrigation of a residential' +
        ' community. It includes designing and implementing softscaping elements like grass, trees,' +
        ' and shrubs, as well as hardscaping features such as pathways, patios, and other structures.' +
        ' The irrigation system ensures sustainable water management.'},
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
      image:'',
      scopeOfWork:'Softscape and Irrigation system',
      mainContractor:'Nesma & Partners',
      consultant:'AECOM',
      progress:'30.0%',
      status:'Ongoing',
      description:' This project is focused on developing the marina promenade. It includes ' +
        'extensive softscaping and the installation of' +
        ' an advanced irrigation system to ensure the maintenance of lush, green landscapes.'},
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
  ];

}
  ngOnInit(): void {
  }

  navigateToProjectDetails(project: any) {
    this._router.navigate(['main/projects/'+project.id]);

  }
}
