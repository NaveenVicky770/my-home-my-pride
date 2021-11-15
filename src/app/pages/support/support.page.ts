import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  constructor( ) { }

  ngOnInit() {
  }

  // call(){
  //   this.callNumber.callNumber('9505444749', true)
  // .then(res => console.log('Launched dialer!', res))
  // .catch(err => console.log('Error launching dialer', err));
  // }



}
