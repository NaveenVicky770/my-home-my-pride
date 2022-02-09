/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Checkout } from 'capacitor-razorpay';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage {
  constructor(
    private alertController: AlertController,
    private apiService: ApiService,
    private router: Router
  ) {}

  async payWithRazorpay() {
    const orderId = localStorage.getItem('order_id');

    const options = {
      key: 'rzp_live_eBda20ZBUAYf1d',
      amount: '100',
      description: 'Great offers',
      image: 'https://i.imgur.com/3g7nmJC.png',
      order_id: orderId, //Order ID generated in Step 1
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
      message: 'Payment Successful   ' + response['razorpay_payment_id'],
      backdropDismiss: true,
    });

    const orderData = {
      payment_id: response['razorpay_payment_id'],
      order_id: response['razorpay_order_id'],
      status: 1,
    };

    console.log(orderData);

    this.apiService.updatePaymentStatus(orderData).subscribe((resObj)=>{
      console.log(resObj);
      this.router.navigateByUrl('/home');
    });

    await alert.present();
  }
}
