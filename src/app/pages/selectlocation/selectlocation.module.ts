import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectlocationPageRoutingModule } from './selectlocation-routing.module';

import { SelectlocationPage } from './selectlocation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectlocationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SelectlocationPage]
})
export class SelectlocationPageModule {}
