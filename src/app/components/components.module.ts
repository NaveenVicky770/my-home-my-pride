import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { IonicModule } from '@ionic/angular';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { HeaderTextLogoComponent } from './header-text-logo/header-text-logo.component';
import { ToolbarTopComponent } from './toolbar-top/toolbar-top.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  declarations: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
    HeaderTextLogoComponent,
    ToolbarTopComponent,
    VerifyOtpComponent,
  ],
  imports: [CommonModule, IonicModule, NgOtpInputModule],
  exports: [
    LocationPickerComponent,
    MapModalComponent,
    ImagePickerComponent,
    HeaderTextLogoComponent,
    ToolbarTopComponent,
    VerifyOtpComponent
  ],
  entryComponents: [MapModalComponent],
})
export class ComponentsModule {}
