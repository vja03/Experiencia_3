import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuestudiantePageRoutingModule } from './menuestudiante-routing.module';

import { MenuestudiantePage } from './menuestudiante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuestudiantePageRoutingModule
  ],
  declarations: [MenuestudiantePage]
})
export class MenuestudiantePageModule {}
