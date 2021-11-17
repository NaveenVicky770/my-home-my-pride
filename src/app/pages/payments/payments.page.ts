/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Checkout } from 'capacitor-razorpay';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage {
  constructor(private alertController: AlertController) {}

  async payWithRazorpay() {
    const options = {
      key: 'rzp_live_twMETB1R0HcCdt',
      amount: '100',
      description: 'Great offers',
      image: 'https://i.imgur.com/3g7nmJC.png',
      order_id: 'order_IMhO5CdpwaKBFs', //Order ID generated in Step 1
      currency: 'INR',
      name: 'My Home My Pride',
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9191919191',
      },
      theme: {
        color: '#3399cc',
      },
    };
    try {
      let data = await Checkout.open(options);
      console.log(data.response + 'AcmeCorp');

      this.presentAlert(data.response);
    } catch (error) {
      this.presentAlert(error.message); //Doesn't appear at all
    }
  }

  async presentAlert(response: string) {
    // let responseObj = JSON.parse(response)
    console.log('message' + response['razorpay_payment_id']);
    const alert = await this.alertController.create({
      message: 'Payment Successful' + response['razorpay_payment_id'],
      backdropDismiss: true,
    });

    await alert.present();
  }
}
