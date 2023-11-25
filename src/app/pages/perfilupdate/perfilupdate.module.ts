import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilupdatePageRoutingModule } from './perfilupdate-routing.module';

import { PerfilupdatePage } from './perfilupdate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilupdatePageRoutingModule
  ],
  declarations: [PerfilupdatePage]
})
export class PerfilupdatePageModule {}
