import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultilocationsPaymentPageRoutingModule } from './multilocations-payment-routing.module';

import { MultilocationsPaymentPage } from './multilocations-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultilocationsPaymentPageRoutingModule
  ],
  declarations: [MultilocationsPaymentPage]
})
export class MultilocationsPaymentPageModule {}
