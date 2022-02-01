import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddlocationPageRoutingModule } from './addlocation-routing.module';

import { AddlocationPage } from './addlocation.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddlocationPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [AddlocationPage],
})
export class AddlocationPageModule {}
