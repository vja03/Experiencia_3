import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeriodoacadPageRoutingModule } from './periodoacad-routing.module';

import { PeriodoacadPage } from './periodoacad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeriodoacadPageRoutingModule
  ],
  declarations: [PeriodoacadPage]
})
export class PeriodoacadPageModule {}
