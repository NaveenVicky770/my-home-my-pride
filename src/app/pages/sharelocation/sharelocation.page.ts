import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Share } from '@capacitor/share';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sharelocation',
  templateUrl: './sharelocation.page.html',
  styleUrls: ['./sharelocation.page.scss'],
})
export class SharelocationPage implements OnInit {
  shareLocationForm: FormGroup;
  selectedLocationId;
  selectedLocationData;

  customPopoverOptions: any = {
    message: 'Select location to share',
  };
  // customContactPopoverOptions: any = {
  //   message: 'Select Contact to share'
  // };

  locations = [];
  // contacts=['contact1','contact2','contact3'];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.shareLocationForm = new FormGroup({
      shareMessage: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });
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

  share() {
    const shareText = JSON.stringify(this.selectedLocationData);
    Share.share({
      title: this.shareLocationForm.get('shareMessage').value,
      text: shareText ,
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  getLocationData(event) {
    this.selectedLocationId = event.target.value;
    this.apiService
      .getLocationData(this.selectedLocationId)
      .subscribe((resObj) => {
        console.log('Selected Location Data==>', resObj);
        this.selectedLocationData = resObj.visibility_locations;
        console.log(this.selectedLocationData);
      });
  }
}
