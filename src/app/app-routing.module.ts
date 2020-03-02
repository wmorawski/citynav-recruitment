import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list'
  },
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'details',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/details/details.module').then(m => m.DetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
