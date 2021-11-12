import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;
  user: {userName: string; phoneNo: number;email: string};
  userName: any;
  phoneNo: any;
  email: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      userName: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),
      phoneNo: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required,Validators.minLength(10)]
      }),
      email: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required,Validators.email]
      })

    });
  }

  signUp(){
    console.log(this.form);
    if(!this.form.valid){
      return;
    }
    this.apiService.userRegister({userName: this.userName,phoneNo: this.phoneNo,email: this.email});
  }

}
