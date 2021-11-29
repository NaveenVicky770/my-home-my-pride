import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MapModalComponent } from 'src/app/components/map-modal/map-modal.component';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.page.html',
  styleUrls: ['./addlocation.page.scss'],
})
export class AddlocationPage implements OnInit {

  location: any;
  addLocationForm: FormGroup;

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

  locationData={};
  userName: any;
  mobileNo: any;
  email: any;
  houseNameNew: any;
  village: any;
  area: any;

  val='';

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addLocationForm = new FormGroup({

      userName: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),

      mobileNo: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),

      email: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),

      houseNameNew: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),

      village: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),

      area: new FormControl(null,{
        updateOn: 'change',
        validators: [Validators.required]
      }),


    });
  }

  addLocation(){
    //
    this.location={
      name: this.userName,
      mobileNo: this.mobileNo,
      houseName: this.houseNameNew
    };
    console.log(this.location);
    this.router.navigateByUrl('/payments');
  }



}
