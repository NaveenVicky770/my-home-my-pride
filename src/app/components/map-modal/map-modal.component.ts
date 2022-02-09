import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit {
  @ViewChild('map') mapElementRef: ElementRef;
  latitude;
  longitude;

  constructor(
    private modalCtrl: ModalController,
    private renderer: Renderer2,
    private apiService: ApiService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.apiService.getPincodeCoordinates().subscribe((resObj) => {

      this.latitude = resObj.results[0].geometry.location.lat;
      this.longitude = resObj.results[0].geometry.location.lng;

      this.getGoogleMaps()
        .then((googleMaps) => {
          const mapEl = this.mapElementRef.nativeElement;
          const map = new googleMaps.Map(mapEl, {
            center: { lat: this.latitude, lng: this.longitude },
            zoom: 12.5,
          });

          googleMaps.event.addListenerOnce(map, 'idle', () => {
            this.renderer.addClass(mapEl, 'visible');
          });

          map.addListener('click', (event) => {
            const selectedCoords = {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            };

            this.modalCtrl.dismiss(selectedCoords);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  onCancel() {
    this.modalCtrl.dismiss();
  }

  private getGoogleMaps(): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src =
        'https://maps.googleapis.com/maps/api/js?key=' +
        environment.googleMapsApiKey;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const loadedGoogleModule = win.google;
        if (loadedGoogleModule && loadedGoogleModule.maps) {
          resolve(loadedGoogleModule.maps);
        } else {
          reject('Google maps SDK not available to load');
        }
      };
    });
  }
}
