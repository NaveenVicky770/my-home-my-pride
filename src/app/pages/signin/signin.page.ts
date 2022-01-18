/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonIntlTelInputValidators } from 'ion-intl-tel-input';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;

  countryIsoCodes=['au','bd','bt','mm','ca','il','kw','my','np','qa','lk','gb','in','pk','us'];

  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '35px',
      'height': '35px'
    }
  };

  prefer=['India'];

  // loginForm: FormGroup;

  formValue = {phoneNumber: '', test: ''};
  form: FormGroup;

  currentFragment='mobile';
  errorMsg;
  mobileno;
  otp: string;
  otpcounter: number;
  showOtpComponent = true;
  isSignIn: void;
  constructor(
    private router: Router,
    private commonService: CommonService,
    private apiService: ApiService,
  ) { }

  onOtpChange(otp) {
    this.otp = otp;
  }


  ngOnInit() {
    this.form = new FormGroup({
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber
      }, [
        Validators.required,
        IonIntlTelInputValidators.phone
      ])
    });
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  // onSubmit() {
  //   console.log(this.phoneNumber.value);
  // }

  sendOtp(){
    this.apiService.userLogin({"phone_no":"095054 44749"})
    .subscribe((resObj)=>{
      console.log(resObj);
      if(resObj.message === 'Verification code sent to your mobile no'){
        this.showOtpFragment();
      }
    });
  }


  showOtpFragment(){
    if(!this.form.valid){
      console.log('Form not Valid');
      return;
    }
    this.currentFragment = 'otp';
  }

  verifyOtpAndGetToken(phone_no,d_1,d_2,d_3,d_4){
    const reqData = {phone_no,"digit_1":d_1,"digit_2":d_2,"digit_3":d_3,"digit_4":d_4};

    this.apiService.verifyOtp(reqData).subscribe((resObj)=>{
      console.log(resObj);
    });
  }

  userLogin(){
    if(!this.form.valid){
      return;
    }

    console.log(this.otp);

    if (this.otp) {
      if (this.otp == '') {
        this.errorMsg = "Please enter otp";
        this.commonService.presentAlert(this.errorMsg, 'error');
      } else if (this.otp.toString().length < 4) {
        this.errorMsg = "Please enter valid otp";
        this.commonService.presentAlert(this.errorMsg, 'error');
      } else if (this.otp.toString().length == 4) {
        this.errorMsg = "";
        console.log(this.mobileno);

        this.verifyOtpAndGetToken("9493443637","1","1","1","1");



        // window.localStorage.setItem('isLoggedIn', '1');
        // this.commonService.isUserLoggedIn.next(true);
        // this.commonService.presentToast('Login Successful','',2000,'bottom');
        // this.router.navigateByUrl('/home');
      } else {
        this.errorMsg = "Please enter otp";
      }
    } else {
      this.errorMsg = "Please enter otp";
      this.commonService.presentAlert(this.errorMsg, 'error');
    }
  }

  ionViewWillEnter(){
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    this.commonService.isUserLoggedIn.next(false);
  }

  ionViewDidEnter() {
    this.currentFragment = 'mobile';
    this.mobileno = '';
    this.otp = '';
  }

  resendOtp() {
    this.commonService.presentToast('OTP Sent Successfully','success');
    this.StartTimer(30);
  }

  VerifyLogin(){
    if (this.otp) {
      if (this.otp == '') {
        this.errorMsg = "Please enter otp";
      } else if (this.otp.toString().length < 4) {
        this.errorMsg = "Please enter valid otp";
      } else if (this.otp.toString().length == 4) {
        this.errorMsg = "";
        this.userLogin();
      } else {
        this.errorMsg = "Please enter otp";
      }
    } else {
      this.errorMsg = "Please enter otp";
    }
  }


  StartTimer(seconds) {
    this.otpcounter = seconds;
    const interval = setInterval(() => {
      this.otpcounter--;
      if (this.otpcounter == 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
