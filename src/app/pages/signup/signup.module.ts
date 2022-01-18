import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { CommonService } from 'src/app/services/common/common.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonIntlTelInputModule } from 'ion-intl-tel-input';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule,
    IonIntlTelInputModule,
    ComponentsModule,
    NgOtpInputModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {

  constructor(private commonService: CommonService){
  }

  ionViewWillEnter(){
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    this.commonService.isUserLoggedIn.next(false);
    // alert('Will ENter');
  }
}
