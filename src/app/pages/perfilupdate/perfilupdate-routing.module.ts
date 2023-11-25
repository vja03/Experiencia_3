import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilupdatePage } from './perfilupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilupdatePageRoutingModule {}
