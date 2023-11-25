import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearasignaturaPage } from './crearasignatura.page';

const routes: Routes = [
  {
    path: '',
    component: CrearasignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearasignaturaPageRoutingModule {}
