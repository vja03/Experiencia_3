import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearasignaturaPageRoutingModule } from './crearasignatura-routing.module';

import { CrearasignaturaPage } from './crearasignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearasignaturaPageRoutingModule
  ],
  declarations: [CrearasignaturaPage]
})
export class CrearasignaturaPageModule {}
