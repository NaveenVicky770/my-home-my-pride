import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-showlocation',
  templateUrl: './showlocation.page.html',
  styleUrls: ['./showlocation.page.scss'],
})
export class ShowlocationPage implements OnInit {

  allLocationsData=[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const userId = localStorage.getItem('showLocationUserId');
    console.log(userId);
    this.apiService.getAllLocationsAndEvents(userId).subscribe((resObj)=>{
      console.log(resObj);
      this.allLocationsData=resObj.Locations;

      console.log(this.allLocationsData);
    });

  }



}
