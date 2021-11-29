import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { NgOtpInputModule } from 'ng-otp-input';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonIntlTelInputModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    ComponentsModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
