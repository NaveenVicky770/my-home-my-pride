import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowlocationPageRoutingModule } from './showlocation-routing.module';

import { ShowlocationPage } from './showlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowlocationPageRoutingModule
  ],
  declarations: [ShowlocationPage]
})
export class ShowlocationPageModule {}
