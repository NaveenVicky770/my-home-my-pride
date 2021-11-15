import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.page.html',
  styleUrls: ['./postevent.page.scss'],
})
export class PosteventPage implements OnInit {

  addresses=['address1', 'address2','address3'];
  customAddressPopoverOptions: any = {
    message: 'Select an Address'
   };

  constructor() { }

  ngOnInit() {
  }

}
