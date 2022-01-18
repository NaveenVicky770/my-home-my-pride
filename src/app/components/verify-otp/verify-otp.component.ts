import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss'],
})
export class VerifyOtpComponent implements OnInit {
  otp: string;
  showOtpComponent = true;
  otpcounter: number;

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '35px',
      height: '35px'
    }
  };

  constructor() { }

  ngOnInit() {}

  onOtpChange(otp) {
    this.otp = otp;
  }

  ionViewDidEnter() {
    this.otp = '';
  }

}
