import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  customPopoverOptions: any = {
    message: 'Select your preffered way'
  };
  supportVia=['Call Support','Chat','Ticket'];

  constructor() { }

  ngOnInit() {
  }

}
