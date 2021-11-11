/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private spinner: NgxSpinnerService,
    private alertController: AlertController,
    public toastCtrl: ToastController,
  ) { }

  presentLoading() {
    this.spinner.show();
  }

  hideLoading() {
    setTimeout(() => {
      this.spinner.hide();
    }, 300);
  }



  public async presentAlert(msg, msg_type, buttons: any = ['Ok']) {
    // eslint-disable-next-line prefer-const
    let cssClass = 'presentalert ' + msg_type;
    const alert = await this.alertController.create({
      cssClass,
      header: '',
      subHeader: '',
      message: msg,
      buttons
    });
    await alert.present();
  }

  async presentToast(message, cssClass = '', durationtime: number = 3000, position: "top" | "bottom" | "middle" = "bottom") {
    const toast = await this.toastCtrl.create({
      message,
      duration: durationtime,
      position,
      cssClass: 'toastmessage '+cssClass
    });
    await toast.present();
  }



}
