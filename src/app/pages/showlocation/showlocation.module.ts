import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowlocationPageRoutingModule } from './showlocation-routing.module';

import { ShowlocationPage } from './showlocation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowlocationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ShowlocationPage]
})
export class ShowlocationPageModule {}
