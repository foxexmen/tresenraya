import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TresenrayaPage } from './tresenraya.page';

import { TresenrayaPageRoutingModule } from './tresenraya-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresenrayaPageRoutingModule
  ],
  declarations: [TresenrayaPage]
})
export class TresenrayaPageModule {}
