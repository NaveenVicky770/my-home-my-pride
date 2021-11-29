import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  sendMailToSupport(mailAdress){
    //code to mail
    this.apiService.sendMail(mailAdress);
  }

}
