import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private deviceService: DeviceService) {

    }

    ngOnInit() {
    }

}
