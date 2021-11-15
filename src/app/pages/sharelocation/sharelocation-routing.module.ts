import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharelocationPage } from './sharelocation.page';

const routes: Routes = [
  {
    path: '',
    component: SharelocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharelocationPageRoutingModule {}
