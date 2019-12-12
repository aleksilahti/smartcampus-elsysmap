import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DeviceService } from 'src/app/device.service';

@Component({
  selector: 'app-new-device-overlay',
  templateUrl: './new-device-overlay.component.html',
  styleUrls: ['./new-device-overlay.component.css']
})
export class NewDeviceOverlayComponent implements OnInit {
  @Input() overlayOpen: boolean;
  latitude: any;
  longitude: any;
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.deviceService.overlay){
      this.longitude = this.deviceService.longitude;
      this.latitude = this.deviceService.latitude;
      console.log(this.latitude, this.longitude);
      const device = {deviceType: 'soundSensor', 
                      status: 'planned',
                      deviceId: 'installedDevicesId', 
                      locationId: 'univOulu1', 
                      coordinates: {latitude: this.latitude, longitude: this.longitude}};
      this.deviceService.addDeviceToDatabase(device);
    }
}
}