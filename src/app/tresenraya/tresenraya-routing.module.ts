import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TresenrayaPage } from './tresenraya.page';

const routes: Routes = [
  {
    path: '',
    component: TresenrayaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TresenrayaPageRoutingModule {}
