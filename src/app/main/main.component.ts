import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
declare let L;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {  
  }

  getSensors(){
    return this.deviceService.getSensors()
  }
}