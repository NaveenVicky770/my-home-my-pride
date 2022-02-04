import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharelocationPageRoutingModule } from './sharelocation-routing.module';

import { SharelocationPage } from './sharelocation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharelocationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SharelocationPage]
})
export class SharelocationPageModule {}
