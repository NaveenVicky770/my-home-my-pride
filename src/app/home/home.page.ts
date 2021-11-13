import { Component } from '@angular/core';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public houseNames = ['Naveen', 'Madhu', 'Shabari','Sasi', 'Deepu', 'Moha','Sunil','Chaitanya'];
  public isSignIn = window.localStorage.getItem('isLoggedIn');

  constructor(private commonService: CommonService) {}

  search(){
    //search logic
  }

  ionViewWillEnter(){
    this.isSignIn = window.localStorage.getItem('isLoggedIn');
    console.log(this.isSignIn);
    if(this.isSignIn === '1'){
      this.commonService.isUserLoggedIn.next(true);
    }
    else{
      this.commonService.isUserLoggedIn.next(false);
    }
  }


}
