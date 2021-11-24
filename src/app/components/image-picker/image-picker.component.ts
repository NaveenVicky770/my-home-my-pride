/* eslint-disable prefer-const */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CameraSource } from '@capacitor/camera';
import { Plugins, Capacitor } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';

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

    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      let imageUrl = image.webPath;

      // Can be set to the src of an image now
      this.selectedImage = imageUrl;
    };

    takePicture();

  }

}
