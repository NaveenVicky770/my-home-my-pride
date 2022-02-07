/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public houseNames = [
    'Naveen',
    'Madhu',
    'Shabari',
    'Sasi',
    'Deepu',
    'Moha',
    'Sunil',
    'Chaitanya',
  ];
  public isSignIn = window.localStorage.getItem('isLoggedIn');
  filterTerm: any;

  userRecords = [
    // {
    //   id: 1,
    //   name: 'Naveen Vicky',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 2,
    //   name: 'Sasi',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 3,
    //   name: 'Deepu',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 4,
    //   name: 'Mohan',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 5,
    //   name: 'Shabari',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 6,
    //   name: 'Ravi',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 7,
    //   name: 'Rajesh',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 8,
    //   name: 'Nicholas',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 9,
    //   name: 'Sasi Kiran',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
    // {
    //   id: 10,
    //   name: 'David',
    //   url: 'https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg',
    // },
  ];

  constructor(
    private commonService: CommonService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // eslint-disable-next-line prefer-const
  }

  search(event) {
    //search logic
    const searchText = event.target.value;
    if (searchText) {
      this.apiService.searchHouses(searchText).subscribe((resObj) => {
        console.log(resObj.List);
        console.log(resObj.status);
        this.userRecords = resObj.List;
      },(err)=>{
        console.log(err.error.message);
      });
    }
    else{
      this.userRecords=[{name:'no data found'}];
    }
  }

  showLocationAndEvents(userId){
    console.log(userId);
    const selectedLocationId = userId;
    localStorage.setItem('showLocationUserId',selectedLocationId);
    this.router.navigateByUrl('/showlocation');

  }

  ionViewWillEnter() {
    this.isSignIn = window.localStorage.getItem('isLoggedIn');
    console.log(this.isSignIn);
    if (this.isSignIn === '1') {
      this.commonService.isUserLoggedIn.next(true);
    } else {
      this.commonService.isUserLoggedIn.next(false);
    }
  }
}
