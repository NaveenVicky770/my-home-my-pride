import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharelocationPageRoutingModule } from './sharelocation-routing.module';

import { SharelocationPage } from './sharelocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharelocationPageRoutingModule
  ],
  declarations: [SharelocationPage]
})
export class SharelocationPageModule {}
