import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisibilityPageRoutingModule } from './visibility-routing.module';

import { VisibilityPage } from './visibility.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisibilityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VisibilityPage]
})
export class VisibilityPageModule {}
