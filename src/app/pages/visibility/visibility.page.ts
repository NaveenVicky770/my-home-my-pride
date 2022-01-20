import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visibility',
  templateUrl: './visibility.page.html',
  styleUrls: ['./visibility.page.scss'],
})
export class VisibilityPage implements OnInit {

  customPopoverOptions: any = {
    message: 'Select location to set visibility status'
  };
  locations=['location1','location2','location3'];
  locationSelected=false;

  constructor() { }

  ngOnInit() {
  }

  getVisibility(){
    console.log('Invoke');
    this.locationSelected=true;
  }

}
