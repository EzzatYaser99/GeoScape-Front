import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    children: [
      { path: 'home', loadComponent: () =>
          import('./Pages/home/home.component').then((m) => m.HomeComponent) },
      { path: 'products', loadComponent: () =>
          import('./Pages/products/products.component').then((m) => m.ProductsComponent) },
      { path: 'projects', loadComponent: () =>
          import('./Pages/projects/projects.component').then((m) => m.ProjectsComponent) },
      { path: 'services', loadComponent: () =>
          import('./Pages/services/services.component').then((m) => m.ServicesComponent) },
      { path: 'services/:id', loadComponent: () =>
          import('../app/Component/service-details/service-details.component').then((m) => m.ServiceDetailsComponent) },
      { path: 'projects/:id', loadComponent: () =>
          import('../app/Component/projects-details/projects-details.component').then((m) => m.ProjectsDetailsComponent) },
      { path: 'partners', loadComponent: () =>
          import('./Pages/partners/partners.component').then((m) => m.PartnersComponent) },
      { path: 'about', loadComponent: () =>
          import('./Pages/about/about.component').then((m) => m.AboutComponent) },
      { path: 'contacts', loadComponent: () =>
          import('./Pages/contacts/contacts.component').then((m) => m.ContactsComponent) },
    ],
  },
  {
    path: 'main/uploadPdf/:id', loadComponent: () =>
      import('../app/Component/uploaded-pdf/uploaded-pdf.component').then((m) => m.UploadedPdfComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main/home',
  },
  {
    path: '**',
    redirectTo: 'main/home',
  },
];


