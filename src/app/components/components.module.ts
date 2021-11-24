import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker/image-picker.component';

@NgModule({
  declarations: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
    HeaderComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, LocationPickerComponent, MapModalComponent,ImagePickerComponent],
  entryComponents: [
    HeaderComponent,
    LocationPickerComponent,
    MapModalComponent,
  ],
})
export class ComponentsModule {}
