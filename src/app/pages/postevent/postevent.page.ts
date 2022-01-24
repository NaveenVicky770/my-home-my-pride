import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  postEventForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.postEventForm = new FormGroup({
      eventName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      eventDescription: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

    });
  }

}
