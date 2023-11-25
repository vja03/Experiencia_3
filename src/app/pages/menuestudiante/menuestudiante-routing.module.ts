import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuestudiantePage } from './menuestudiante.page';

const routes: Routes = [
  {
    path: '',
    component: MenuestudiantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuestudiantePageRoutingModule {}
