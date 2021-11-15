import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharelocation',
  templateUrl: './sharelocation.page.html',
  styleUrls: ['./sharelocation.page.scss'],
})
export class SharelocationPage implements OnInit {

  customPopoverOptions: any = {
    message: 'Select location to share'
  };
  customContactPopoverOptions: any = {
    message: 'Select Contact to share'
  };

  locations=['location1','location2','location3'];
  contacts=['contact1','contact2','contact3'];

  constructor() { }

  ngOnInit() {
  }

}
