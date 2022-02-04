/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-var */
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.page.html',
  styleUrls: ['./visibility.page.scss'],
})
export class VisibilityPage implements OnInit {
  customPopoverOptions: any = {
    message: 'Select location to set visibility status',
  };
  locations = [];
  locationSelected = false;
  isActive;
  selectedLocationId;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getExistingHouses().subscribe((resObj) => {
      console.log('Existing Houses', resObj);
      resObj.message.forEach((element) => {
        this.locations.push({
          houseName: element.name,
          houseId: element.location_id,
        });
      });
    });
  }

  getVisibility(event) {
    this.locationSelected = true;
    console.log(event.target.value);
    this.selectedLocationId = event.target.value;
    this.apiService
      .getLocationData(this.selectedLocationId)
      .subscribe((resObj) => {
        console.log('Selected Location Data==>', resObj);
        this.isActive =
          resObj.visibility_locations.is_active === '1' ? true : false;
        console.log(this.isActive);
      });
  }

  toggleVisibility(event) {
    console.log(event.target.checked);
    const updatedStatus = event.target.checked;

    this.apiService
      .updateLocationVisibility({ location_id: 24, is_active: 1 })
      .subscribe((resObj) => {
        console.log(resObj);
      });
  }
}
