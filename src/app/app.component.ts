/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from './services/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public isSignIn = window.localStorage.getItem('isLoggedIn');
  isUserLoggedIn = false;

  public appPages = [
    {
      title: 'My House Name',
      url: 'home',
      icon: 'home-outline',
    },
    {
      title: 'Show Location',
      url: 'showlocation',
      icon: 'location',
    },
    {
      title: 'Manage Visibility',
      url: 'visibility',
      icon: 'eye-outline',
    },
    {
      title: 'Post Event',
      url: 'postevent',
      icon: 'card-outline',
    },
    {
      title: 'Share location / Event',
      url: 'sharelocation',
      icon: 'share-social-outline',
    },
    {
      title: 'Support',
      url: 'support',
      icon: 'headset-outline',
    },
    {
      title: 'Logout',
      url: 'signin',
      icon: 'log-out-outline',
    },
  ];

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private commonService: CommonService
  ) {
    this.commonService.isUserLoggedIn.subscribe((value) => {
      this.isUserLoggedIn = value;
    });
  }
  ngOnInit() {
    let isSignIn = '0';
    console.log('ngOnInit');

    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 300);
  }

  ionViewWillEnter() {
    this.isSignIn = window.localStorage.getItem('isLoggedIn');
  }

  logout() {
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('user_id');
    this.commonService.isUserLoggedIn.next(false);
    this.commonService.presentToast('Logged Out', '', 2000, 'bottom');
    this.router.navigateByUrl('/signin');
  }
}
