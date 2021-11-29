import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultilocationsPaymentPage } from './multilocations-payment.page';

const routes: Routes = [
  {
    path: '',
    component: MultilocationsPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultilocationsPaymentPageRoutingModule {}
