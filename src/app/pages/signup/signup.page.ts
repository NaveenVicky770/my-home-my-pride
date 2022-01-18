/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

import { IonIntlTelInputValidators } from 'ion-intl-tel-input';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;

  // form: FormGroup;

  // loginForm: FormGroup;

  formValue = { phoneNumber: '', test: '' };
  form: FormGroup;

  user: { userName: string; phoneNo: number; email: string };
  userName: any;
  phoneNo: any;
  email: any;
  countryIsoCodes = [
    'au',
    'bd',
    'bt',
    'mm',
    'ca',
    'il',
    'kw',
    'my',
    'np',
    'qa',
    'lk',
    'gb',
    'in',
    'pk',
    'us',
  ];
  currentFragment: string;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      phoneNumber: new FormControl(
        {
          value: this.formValue.phoneNumber,
        },
        [Validators.required, IonIntlTelInputValidators.phone]
      ),
      email: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  ionViewDidEnter() {
    this.currentFragment = 'mobile';
  }

  get phoneNumber() {
    return this.form.get('phoneNumber');
  }



  // verifyOtp() {
  //   this.apiService
  //     .verifyOtp({
  //       phone_no: 9505444749,
  //       digit_1: '1',
  //       digit_2: '1',
  //       digit_3: '1',
  //       digit_4: '1',
  //     })
  //     .subscribe((resObj) => {
  //       console.log('resObj===>', resObj);
  //       if (resObj.errorstatus === 200) {
  //         console.log('OTP verified success');
  //         this.userRegister();
  //       } else {
  //         console.log('Wrong Otp, Pls try again');
  //       }
  //     });
  // }

  userRegister() {
    // this.commonService.presentLoading();
    const phone_no = (this.phoneNo.nationalNumber).replace(/\s/g,'');
    this.apiService
      .userRegister({
        name: this.userName,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        phone_no,
        email: this.email,
      })
      .subscribe((resObj) => {
        // this.commonService.hideLoading();
        console.log('resObj', resObj);
        if (resObj.message === 'Registration successfully...') {
          console.log('Registration Successful');
          window.localStorage.setItem('isLoggedIn', '1');
          this.commonService.isUserLoggedIn.next(true);
          this.commonService.presentToast(
            'Registration Successful',
            '',
            2000,
            'bottom'
          );
          this.router.navigateByUrl('/signin');
          setTimeout(()=>{
            this.commonService.presentToast(
              'You can Login Now',
              '',
              2000,
              'bottom'
            );
          },2000);
        } else {
          console.log('User Already Exists');
          this.commonService.presentToast(
            'User Already Exists,Please Login',
            '',
            2000,
            'bottom'
          );
        }
        // if (resObj.status == 1 && resObj.otp) {
        //   this.currentFragment = 'otp';
        //   this.StartTimer(30);
        // } else if (resObj.status == 1 && resObj.user_data) {
        //   this.ShowUserDetailsForm(resObj.user_data);
        // } else {
        //   this.errorMsg = resObj.message;
        // }
      });
  }
}
