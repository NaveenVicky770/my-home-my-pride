/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestureController, ModalController } from '@ionic/angular';
import { MapModalComponent } from 'src/app/components/map-modal/map-modal.component';
import { ApiService } from 'src/app/services/api/api.service';
import { CommonService } from 'src/app/services/common/common.service';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { RecordingData, VoiceRecorder } from 'capacitor-voice-recorder';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.page.html',
  styleUrls: ['./addlocation.page.scss'],
})
export class AddlocationPage implements OnInit, AfterViewInit {

  @ViewChild('recordbtn',{read: ElementRef}) recordbtn: ElementRef;

  location: any;
  addLocationForm: FormGroup;
  currentUser;

  customPopoverOptions: any = {
    message: 'Select a Country',
  };
  customStatePopoverOptions: any = {
    message: 'Select a State',
  };
  customDistrictPopoverOptions: any = {
    message: 'Select a District',
  };
  customExistingHousePopoverOptions: any = {
    message: 'Select a House Name',
  };

  countries = ['India', 'China', 'USA'];
  states = [];
  districts = [];
  existingHouses = [];

  locationData = {};
  userName: any;
  mobileNo: any;
  email: any;
  countryName: any;
  countryCode: any;
  newHouseName: any;

  val = '';
  orderId;

  recording = false;
  storedFileNames = [];
  durationDisplay='';
  duration=0;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private commonService: CommonService,
    private gestureCtrl: GestureController
  ) {}

  ngOnInit() {
    this.addLocationForm = new FormGroup({
      newHouseName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      existingHouseName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      state: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      district: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      village: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      area: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      doorPlotNo: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),

      apartment: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      pincode: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
    });

    this.apiService.getCurrentUser().subscribe((resObj) => {
      this.currentUser = resObj.message;
      // console.log(this.currentUser);
      this.userName = this.currentUser.name;
      this.email = this.currentUser.email;
      this.mobileNo = this.currentUser.phone_no;
      this.countryName = this.currentUser.country_name;
      this.countryCode = this.currentUser.country_id;

      this.apiService.getStates(this.countryCode).subscribe((resObj2) => {
        console.log(resObj2.states);
        resObj2.states.forEach((element) => {
          this.states.push(element);
        });
      });
    });

    this.apiService.createAndGetOrderData({
      amount: 100,
      currency: 'INR',
      receipt: 'rcptid_11',
    }).subscribe((resObj)=>{
      console.log('\n\nORDER ID',resObj.id);
      this.orderId= resObj.id;
      localStorage.setItem('order_id', this.orderId);
    });

    this.apiService.getExistingHouses().subscribe((resObj) => {
      console.log('Existing Houses', resObj);
      resObj.message.forEach((element) => {
        this.existingHouses.push({
          house_name: element.new_house_name,
          house_id: element.location_id,
        });
      });
    });


    this.loadFiles();

    VoiceRecorder.requestAudioRecordingPermission();

  }

  ngAfterViewInit() {
    const longPress = this.gestureCtrl.create({
      el: this.recordbtn.nativeElement,
      threshold:0,
      gestureName: 'long-press',
      onStart: ev =>{
        Haptics.impact({style: ImpactStyle.Light});

        this.storedFileNames.forEach(element => {
          Filesystem.deleteFile({
            path:element,
            directory:Directory.Data
          });
        });
        this.startRecording();
        this.calculateDuration();
      },
      onEnd: ev =>{
        Haptics.impact({style: ImpactStyle.Light});
        this.stopRecording();
      }
    },true);

    longPress.enable();
  }

  onChange(event){
    localStorage.setItem('pincode',(event.target.value));
  }

  addLocation() {
    const formattedAddress=localStorage.getItem('formatted_address');

    const existing_House = this.addLocationForm.get('existingHouseName').value
      ? this.addLocationForm.get('existingHouseName').value
      : 0;
    this.apiService
      .addLocation({
        name: this.userName,
        phone_no: this.mobileNo, //need change FROM API itself
        email: this.email,
        existing_house_id: existing_House,
        new_house_name: this.addLocationForm.get('newHouseName').value,
        country: this.countryName,
        state: this.addLocationForm.get('state').value,
        district: this.addLocationForm.get('district').value,
        village_city_town: this.addLocationForm.get('village').value,
        area: this.addLocationForm.get('area').value,
        door_plot_no: this.addLocationForm.get('doorPlotNo').value,
        apartement: this.addLocationForm.get('apartment').value,
        pincode: this.addLocationForm.get('pincode').value,
        location: formattedAddress,
        voice_direction: 'asdas',
      })
      .subscribe((resObj) => {
        console.log(resObj);
        this.commonService.presentToast(
          'Location Added successfully',
          '',
          2000,
          'bottom'
        );
        localStorage.removeItem('formatted_address');
      });

    this.router.navigateByUrl('/payments');
  }

  getDistricts(event) {
    this.districts = [];
    const stateId = event.target.value;
    this.apiService
      .getDistricts(this.countryCode, stateId)
      .subscribe((resObj) => {
        console.log(resObj.district);
        resObj.district.forEach((element) => {
          this.districts.push(element.district_name);
        });
      });
  }

  calculateDuration(){
    if(!this.recording){
      this.duration=0;
      this.durationDisplay='';
      return;
    }
    this.duration+=1;

    const minutes = Math.floor(this.duration/60);
    const seconds = (this.duration % 60 ).toString().padStart(2,'0');

    this.durationDisplay = `${minutes}: ${seconds}`;

    setTimeout(()=>{
      this.calculateDuration();
    },1000);
  }

  async loadFiles(){
    Filesystem.readdir({
      path:'',
      directory: Directory.Data
    }).then( result =>{
      console.log('FileSYSTEM=====**************>>>>>>>',result);
      this.storedFileNames = result.files;
    });
  }

  startRecording(){
    if(this.recording){
      return;
    }
    this.recording = true;
    VoiceRecorder.startRecording();

  }

  stopRecording(){
    if(!this.recording){
      return;
    }
    VoiceRecorder.stopRecording().then(async (result: RecordingData) => {
      this.recording= false;
      if(result.value && result.value.recordDataBase64){
        const recordData = result.value.recordDataBase64;
        console.log('RECORD DATA ***********************', recordData);

        const fileName = new Date().getTime() +'.wav';
        await Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data: recordData
        });
        this.loadFiles();
      }
    });
  }

  async playFile(fileName){
    const audioFile = await Filesystem.readFile({
      path: fileName,
      directory: Directory.Data
    });
    console.log('AUDIO FILE #########', audioFile);
    const base64Sound = audioFile.data;

    const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
    audioRef.oncanplaythrough = ()=> audioRef.play();
    audioRef.load();
  }

  async deleteRecording(fileName){
    await Filesystem.deleteFile({
      directory:Directory.Data,
      path: fileName
    });
    this.loadFiles();
  }

}
