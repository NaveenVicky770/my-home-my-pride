import { Component, OnInit } from '@angular/core';
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

  // form: FormGroup;

  // loginForm: FormGroup;

  formValue = {phoneNumber: '', test: ''};
  form: FormGroup;

  user: {userName: string; phoneNo: number;email: string};
  userName: any;
  phoneNo: any;
  email: any;
  countryIsoCodes=['au','bd','bt','mm','ca','il','kw','my','np','qa','lk','gb','in','pk','us'];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({

      userName: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNumber: new FormControl({
        value: this.formValue.phoneNumber
      }, [
        Validators.required,
        IonIntlTelInputValidators.phone
      ]),
      email: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required,Validators.email]
      })

    });
  }

  get phoneNumber() { return this.form.get('phoneNumber'); }

  signUp(){
    console.log(this.form);
    if(!this.form.valid){
      return;
    }
    this.apiService.userRegister({userName: this.userName,phoneNo: this.phoneNo.nationalNumber ,email: this.email});
    this.router.navigateByUrl('/signin');
    this.commonService.presentToast('Registration Successful','',2000,'bottom');
  }

}
