/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.page.html',
  styleUrls: ['./postevent.page.scss'],
})
export class PosteventPage implements OnInit {
  locations = [];
  customAddressPopoverOptions: any = {
    message: 'Select an Address',
  };

  addEventForm: FormGroup;

  constructor(private apiService: ApiService, private commonService: CommonService) {}

  ngOnInit() {
    this.addEventForm = new FormGroup({
      eventName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventDescription: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventFromDate: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventToDate: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventAddressId: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventAddress: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.apiService.getLocationsData().subscribe((resObj)=>{
      console.log(resObj);
      resObj.visibility_locations.forEach(element => {
        console.log(element.name);
        this.locations.push({location_name:element.name, location_id: element.location_id});
      });
    });
  }

  addEvent() {
    this.apiService
      .addEvent({
        event_name: this.addEventForm.get('eventName').value,
        event_description: this.addEventForm.get('eventDescription').value,
        from_date: this.addEventForm.get('eventFromDate').value,
        to_date: this.addEventForm.get('eventToDate').value,
        address_id: this.addEventForm.get('eventAddressId').value,
        event_address: this.addEventForm.get('eventAddress').value
      })
      .subscribe((resObj) => {
        console.log(resObj);
        this.commonService.presentToast(
          'Event Posted successfully',
          '',
          2000,
          'bottom'
        );
      });

  }
}
