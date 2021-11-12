import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditlocationPageRoutingModule } from './editlocation-routing.module';

import { EditlocationPage } from './editlocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditlocationPageRoutingModule
  ],
  declarations: [EditlocationPage]
})
export class EditlocationPageModule {}
