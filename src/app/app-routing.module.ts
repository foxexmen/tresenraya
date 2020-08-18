import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tresenraya',
    loadChildren: () => import('./tresenraya/tresenraya.module').then( m => m.TresenrayaPageModule)
  },
  {
    path: '',
    redirectTo: 'tresenraya',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
