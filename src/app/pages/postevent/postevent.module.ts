import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosteventPageRoutingModule } from './postevent-routing.module';

import { PosteventPage } from './postevent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosteventPageRoutingModule
  ],
  declarations: [PosteventPage]
})
export class PosteventPageModule {}
