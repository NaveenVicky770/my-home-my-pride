import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ApiService } from 'src/app/services/api/api.service';


@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  message;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  sendMailToSupport(mailAdress){
    //code to mail
    console.log(this.message);
    this.apiService.sendMailToSupport(this.message).subscribe((resObj)=>{
      console.log(resObj);
    });
  }

}
