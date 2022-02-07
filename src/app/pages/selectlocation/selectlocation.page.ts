import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-selectlocation',
  templateUrl: './selectlocation.page.html',
  styleUrls: ['./selectlocation.page.scss'],
})
export class SelectlocationPage implements OnInit {

  customPopoverOptions: any = {
    message: 'Select location to set visibility status'
  };
  locations=[];
  locationSelected=false;

  constructor(private apiService: ApiService) { }

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

  editSelected(event){
    this.locationSelected=!this.locationSelected;
    console.log(event.target.value);
    const selectedLocationId = event.target.value;
    localStorage.setItem('locationIdForEdit',selectedLocationId);
  }

}
