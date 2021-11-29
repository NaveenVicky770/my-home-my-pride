import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultilocationsPaymentPageRoutingModule } from './multilocations-payment-routing.module';

import { MultilocationsPaymentPage } from './multilocations-payment.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultilocationsPaymentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MultilocationsPaymentPage]
})
export class MultilocationsPaymentPageModule {}
