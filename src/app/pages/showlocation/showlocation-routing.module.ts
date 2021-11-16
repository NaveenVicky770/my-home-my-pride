import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowlocationPage } from './showlocation.page';

const routes: Routes = [
  {
    path: '',
    component: ShowlocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowlocationPageRoutingModule {}
