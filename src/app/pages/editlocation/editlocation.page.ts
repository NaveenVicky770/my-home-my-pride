import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editlocation',
  templateUrl: './editlocation.page.html',
  styleUrls: ['./editlocation.page.scss'],
})
export class EditlocationPage implements OnInit {

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
  states=['Andhra Pradesh','Tamil Nadu','Karntaka'];
  districts=['Chittor','Kadapa','Hyderabad'];

  constructor() { }

  ngOnInit() {
  }

}
