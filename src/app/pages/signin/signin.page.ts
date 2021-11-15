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


  showOtpFragment(){
    let userFound=false;
    if(!this.form.valid){
      console.log('Form not Valid');
      return;
    }

    const users = (JSON.parse(this.apiService.getUsers()));
    console.log('check');

    users.forEach(user => {
      console.log(this.mobileno.nationalNumber,user.phoneNo);
      if(user.phoneNo == this.mobileno.nationalNumber){
        this.currentFragment = 'otp';
        this.StartTimer(3);
        this.commonService.presentToast('OTP sent','text-white',2500,'bottom');
        userFound=true;
      }
    });
    if(!userFound){
      this.commonService.presentAlert('User details not found', 'error');
    }

  }

  userLogin(){
    if(!this.form.valid){
      return;
    }

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
        window.localStorage.setItem('isLoggedIn', '1');
        window.localStorage.setItem('user_id',Math.random().toString());
        window.localStorage.setItem('user_name', 'Naveen_static_name_for_now');
        this.commonService.isUserLoggedIn.next(true);
        this.commonService.presentToast('Login Successful','',2000,'bottom');
        this.router.navigateByUrl('/home');
      } else {
        this.errorMsg = "Please enter otp";
      }


      console.log('one');

    } else {
      this.errorMsg = "Please enter otp";
      this.commonService.presentAlert(this.errorMsg, 'error');
      console.log('two');
    }






    // this.commonService.presentLoading();
    // this.apiService.UserLogin({ mobile_number: this.mobileno, otp: this.otp }).subscribe(resObj => {
    //   // this.commonService.hideLoading();
    //   if (resObj.status == 1) {
    //     if (typeof resObj.otp != 'undefined') {
    //       this.currentFragment = 'otp';
    //       this.StartTimer(3);
    //       this.commonService.presentToast('OTP sent','text-white',2500,'bottom');
    //     }
    //     else {
    //       if (resObj.user_data.user_id && resObj.user_data.user_id != '') {
    //         window.localStorage.setItem('isLoggedIn', '1');
    //         window.localStorage.setItem('user_id', resObj.user_data.user_id);
    //         window.localStorage.setItem('user_name', resObj.user_data.name);
    //         this.commonService.isUserLoggedIn.next(true);
    //         this.commonService.presentToast('Login Successful','',2000,'bottom');
    //         this.router.navigateByUrl('/home');

    //       }
    //       else {
    //         this.commonService.presentAlert('User details not found', 'error');
    //       }
    //     }
    //   }
    //   else {
    //     this.commonService.presentAlert(resObj.message, 'error');
    //   }
    // });
  }

  ionViewWillEnter(){
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('user_name');
    this.commonService.isUserLoggedIn.next(false);
    // alert('Will ENter');
  }

  ionViewDidEnter() {
    this.currentFragment = 'mobile';
    this.mobileno = '';
    this.otp = '';
  }

  resendOtp() {
    this.commonService.presentToast('OTP Sent Successfully','success');
    this.StartTimer(30);
    // this.commonService.presentLoading();
    // this.apiService.ResendOTP({ mobile_number: this.mobileno, type: 'login' }).subscribe(resObj => {
    //   if(resObj.status == 1)
    //   {
    //     this.commonService.presentToast(resObj.message,'success');
    //     this.StartTimer(30);
    //   }
    //   else
    //   {
    //     this.commonService.presentToast(resObj.message,'error');
    //   }
    //   // this.commonService.hideLoading();
    // });
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
     // console.log(this.otpcounter);
      this.otpcounter--;
      if (this.otpcounter == 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

}
