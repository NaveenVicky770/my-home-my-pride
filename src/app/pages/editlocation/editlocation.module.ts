import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlocationPageRoutingModule } from './editlocation-routing.module';

import { EditlocationPage } from './editlocation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlocationPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [EditlocationPage]
})
export class EditlocationPageModule {}
