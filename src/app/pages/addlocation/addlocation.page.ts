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
  customExistingHousePopoverOptions: any = {
    message: 'Select a House Name',
  };

  countries = ['India', 'China', 'USA'];
  states = ['Andhra Pradesh', 'Tamil Nadu', 'Karntaka'];
  districts = ['Chittor', 'Kadapa', 'Hyderabad'];
  existingHouseNames =['House1','House2'];

  locationData = {};
  userName: any;
  mobileNo: any;
  email: any;
  newHouseName: any;
  village: any;
  area: any;
  doorPlotNo: any;
  apartment: any;

  val = '';

  constructor(private apiService: ApiService, private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    this.addLocationForm = new FormGroup({
      newHouseName: new FormControl(null, {
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

      doorPlotNo: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      apartment: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.currentUser = this.apiService.getCurrentUser();
    console.log(this.currentUser);
    console.log(this.currentUser.userName);

  }

  addLocation() {
    //
    this.location = {
      name: this.userName,
      mobileNo: this.mobileNo,
      houseName: this.newHouseName,
    };
    console.log(this.location);

    this.apiService.addLocation({
      name: this.currentUser.userName,
      phone_no: this.currentUser.mobile,
      email: this.currentUser.email,
      existing_house_name: 'existing One',
      new_house_name: this.newHouseName,
      country: this.currentUser.countryName,
      state: 'AP',
      district: 'GNT',
      village_city_town: this.village,
      area: this.area,
      door_plot_no: this.doorPlotNo,
      apartement: this.apartment,
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
