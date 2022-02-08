/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.page.html',
  styleUrls: ['./editlocation.page.scss'],
})
export class EditlocationPage implements OnInit {

  currentUser;

  customPopoverOptions: any = {
    message: 'Select a Country'
   };
  customStatePopoverOptions: any = {
  message: 'Select a State'
  };
  customDistrictPopoverOptions: any = {
    message: 'Select a District'
   };
  countries=['India','China','USA'];

  editLocationForm: FormGroup;
  userName;
  email;
  mobileNo;
  countryName;
  countryCode;
  states = [];
  districts = [];
  existingHouses = [];
  customExistingHousePopoverOptions: any = {
    message: 'Select a House Name',
  };
  locationData;

  locationId = localStorage.getItem('locationIdForEdit');

  constructor(
    private apiService: ApiService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit() {

    this.editLocationForm = new FormGroup({
      new_house_name: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      existing_house_id: new FormControl(null, {
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
      village_city_town: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      area: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      door_plot_no: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      apartement: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.apiService.getLocationData(this.locationId).subscribe((resObj)=>{
      this.locationData = (resObj.visibility_locations);
      console.log('\nlocation data-------------->',this.locationData);
      this.editLocationForm.patchValue({...this.locationData});
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
          houseName: element.new_house_name,
          houseId: element.location_id,
        });
      });
    });

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

  editLocation(){
    const existing_House = this.editLocationForm.get('existing_house_id').value
      ? this.editLocationForm.get('existing_house_id').value
      : 0;
    this.apiService
      .editLocation({
        location_id:this.locationId,
        name: this.userName,
        phone_no: this.mobileNo,
        email: this.email,
        existing_house_id: existing_House,
        new_house_name: this.editLocationForm.get('new_house_name').value,
        country: this.countryName,
        state: this.editLocationForm.get('state').value,
        district: this.editLocationForm.get('district').value,
        village_city_town: this.editLocationForm.get('village_city_town').value,
        area: this.editLocationForm.get('area').value,
        door_plot_no: this.editLocationForm.get('door_plot_no').value,
        apartement: this.editLocationForm.get('apartement').value,
        location: 'Aqwe',
        voice_direction: 'asdas',
      })
      .subscribe((resObj) => {
        console.log(resObj);
        this.commonService.presentToast(
          'Location Edited successfully',
          '',
          2000,
          'bottom'
        );
        this.router.navigateByUrl('/home');
      });
  }

}
