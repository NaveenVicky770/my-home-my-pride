import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from 'src/app/components/map-modal/map-modal.component';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.page.html',
  styleUrls: ['./addlocation.page.scss'],
})
export class AddlocationPage implements OnInit {

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

  locationData=[];

  constructor() { }

  ngOnInit() {
  }

  addLocation(){
    //
  }



}
