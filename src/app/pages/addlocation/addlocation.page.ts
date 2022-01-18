/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from 'src/app/components/map-modal/map-modal.component';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.page.html',
  styleUrls: ['./addlocation.page.scss'],
})
export class AddlocationPage implements OnInit {
  location: any;
  addLocationForm: FormGroup;
  currentUser;

  customPopoverOptions: any = {
    message: 'Select a Country',
  };
  customStatePopoverOptions: any = {
    message: 'Select a State',
  };
  customDistrictPopoverOptions: any = {
    message: 'Select a District',
  };
  countries = ['India', 'China', 'USA'];
  states = ['Andhra Pradesh', 'Tamil Nadu', 'Karntaka'];
  districts = ['Chittor', 'Kadapa', 'Hyderabad'];

  locationData = {};
  userName: any;
  mobileNo: any;
  email: any;
  houseNameNew: any;
  village: any;
  area: any;

  val = '';

  constructor(private apiService: ApiService, private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    this.addLocationForm = new FormGroup({
      houseNameNew: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      village: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      area: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.currentUser = this.apiService.getCurrentUser();
    console.log(this.currentUser.userName);
    console.log('check');
  }

  addLocation() {
    //
    this.location = {
      name: this.userName,
      mobileNo: this.mobileNo,
      houseName: this.houseNameNew,
    };
    console.log(this.location);

    this.apiService.addLocation({
      name: 'Sadsa',
      phone_no: 9493443637,
      email: 'amarasuresh461@gmail.com',
      existing_house_name: 'test',
      new_house_name: 'Ggg',
      country: 'IND',
      state: 'AP',
      district: 'GNT',
      village_city_town: 'GGt',
      area: 'CCT',
      door_plot_no: 154,
      apartement: 'FD',
      location: 'Aqwe',
      voice_direction: 'asdas',
    }).subscribe((resObj)=>{
      console.log(resObj);
      this.commonService.presentToast(
        'Location Added successfully',
        '',
        2000,
        'bottom'
      );
    });

    this.router.navigateByUrl('/payments');
  }
}
