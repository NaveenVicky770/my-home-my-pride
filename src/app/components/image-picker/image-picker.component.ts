import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Camera,CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins, Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {

  @Output() imagePick = new EventEmitter<string>();
  selectedImage: string;

  constructor() { }

  ngOnInit() {}

  onPickImage(){
    if(!Capacitor.isPluginAvailable('Camera')){
      console.log('Camera Plugin not available');
      return;
    }

    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width:200,
      resultType: CameraResultType.Base64
    }).then( image => {
      this.selectedImage = image.base64Data;
      this.imagePick.emit(image.base64Data);

    }).catch( err => {
      console.log(err);
      return false;
    });

  }

}
