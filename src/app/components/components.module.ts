import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents:[
    HeaderComponent
  ]
})
export class ComponentsModule { }
