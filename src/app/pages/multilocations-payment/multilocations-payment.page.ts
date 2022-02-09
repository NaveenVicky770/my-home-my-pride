import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-multilocations-payment',
  templateUrl: './multilocations-payment.page.html',
  styleUrls: ['./multilocations-payment.page.scss'],
})
export class MultilocationsPaymentPage implements OnInit {


  customPopoverOptions: any = {
    message: 'Select location',
  };
  locations=[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getExistingHouses().subscribe((resObj) => {
      console.log('Existing Houses', resObj);
      resObj.message.forEach((element) => {
        this.locations.push({
          houseName: element.new_house_name,
          houseId: element.location_id,
        });
      });
    });
  }



}
