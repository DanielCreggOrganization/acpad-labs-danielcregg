import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     // Add path to standalone component. Any route can lazily load its routed, standalone component by using loadComponent:
     path: 'standalone',
     loadComponent: () => import('./standalone/standalone.component').then(mod => mod.StandaloneComponent)
  },
  {
    path: 'ngcomponent',
    loadChildren: () => import('./ngmodule/ngmodule.module').then(m => m.NgmoduleModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes.page').then( m => m.NotesPage ) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }