import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { HeaderTextLogoComponent } from './header-text-logo/header-text-logo.component';
import { ToolbarTopComponent } from './toolbar-top/toolbar-top.component';

@NgModule({
  declarations: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
    HeaderTextLogoComponent,
    ToolbarTopComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
    HeaderTextLogoComponent,
    ToolbarTopComponent,
  ],
  entryComponents: [LocationPickerComponent, MapModalComponent],
})
export class ComponentsModule {}
