import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multilocations-payment',
  templateUrl: './multilocations-payment.page.html',
  styleUrls: ['./multilocations-payment.page.scss'],
})
export class MultilocationsPaymentPage implements OnInit {


  customPopoverOptions: any = {
    message: 'Select location',
  };
  locations=['location1','location2','location3'];

  constructor() { }

  ngOnInit() {
  }



}
