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
  states = [];
  districts = [];
  existingHouses = [];

  locationData = {};
  userName: any;
  mobileNo: any;
  email: any;
  countryName: any;
  countryCode: any;
  newHouseName: any;

  val = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.addLocationForm = new FormGroup({
      newHouseName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      existingHouseName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      state: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      district: new FormControl(null, {
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

    this.apiService.getCurrentUser().subscribe((resObj) => {
      this.currentUser = resObj.message;
      console.log(this.currentUser);
      this.userName = this.currentUser.name;
      this.email = this.currentUser.email;
      this.mobileNo = this.currentUser.phone_no;
      this.countryName = this.currentUser.country_name;
      this.countryCode = this.currentUser.country_id;

      this.apiService.getStates(this.countryCode).subscribe((resObj2) => {
        console.log(resObj2.states);
        resObj2.states.forEach((element) => {
          this.states.push(element);
        });
      });
    });

    this.apiService.getExistingHouses().subscribe((resObj) => {
      console.log('Existing Houses', resObj);
      resObj.message.forEach((element) => {
        this.existingHouses.push({
          house_name: element.name,
          house_id: element.location_id,
        });
      });
    });
  }

  addLocation() {
    const existing_House = this.addLocationForm.get('existingHouseName').value
      ? this.addLocationForm.get('existingHouseName').value
      : 0;
    this.apiService
      .addLocation({
        name: this.userName,
        phone_no: 8096915812, //need change FROM API itself
        email: this.email,
        existing_house_id: existing_House,
        new_house_name: this.addLocationForm.get('newHouseName').value,
        country: this.countryName,
        state: this.addLocationForm.get('state').value,
        district: this.addLocationForm.get('district').value,
        village_city_town: this.addLocationForm.get('village').value,
        area: this.addLocationForm.get('area').value,
        door_plot_no: this.addLocationForm.get('doorPlotNo').value,
        apartement: this.addLocationForm.get('apartment').value,
        location: 'Aqwe',
        voice_direction: 'asdas',
      })
      .subscribe((resObj) => {
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

  getDistricts(event) {
    this.districts = [];
    const stateId = event.target.value;
    this.apiService
      .getDistricts(this.countryCode, stateId)
      .subscribe((resObj) => {
        console.log(resObj.district);
        resObj.district.forEach((element) => {
          this.districts.push(element.district_name);
        });
      });
  }
}
