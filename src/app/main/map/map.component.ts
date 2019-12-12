import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from 'src/app/device.service';
declare let L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() sensors: any;
  sensorArrayLength: number;
  map: any;
  co2RedIcon = this.addIcon('assets/co2red.svg');
  co2YellowIcon = this.addIcon('assets/co2yellow.svg');
  co2GreenIcon = this.addIcon('assets/co2green.svg');
  soundRedIcon = this.addIcon('assets/soundred.svg');
  soundYellowIcon = this.addIcon('assets/soundyellow.svg');
  soundGreenIcon = this.addIcon('assets/soundgreen.svg');
  self = this;
  constructor(private deviceService: DeviceService) {
  }

  ngOnInit() {
    this.map = L.map('map').setView([65.0591022, 25.4665], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        minZoom: 16,
        maxZoom: 25
    }).addTo(this.map);
    //click event handling(add marker)
    this.map.on('click', this.addNewDevice.bind(this) );
    //add linnanmaa campus overlay
    this.addCampusOverlay( this.map );
    //Add sensor markers
    this.addMarkersToMap( this.map );
    this.sensorArrayLength = this.sensors.length;
    console.log(this.sensorArrayLength);
  }

  ngDoCheck(){
    if(this.sensors.length > this.sensorArrayLength){
      this.addMarkersToMap( this.map );
      this.sensorArrayLength = this.sensors.length;
    }
  }


  addIcon ( iconUrl: string ): any {
    //specifies an icon template that can then be used on a leaflet map 
    const icon = L.icon({
      iconUrl: iconUrl,
      iconSize:     [30, 30], // size of the icon
      iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
      popupAnchor:  [0, -15] // point from which the popup should open relative to the iconAnchor
    });
    return icon;
  }

  chooseIcon( device ){
    //Returns an icon based on a devices status and type
    let icon = this.co2RedIcon;
    if(device.deviceType === 'co2Sensor'){
      if(device.status === 'receiving'){
        icon = this.co2GreenIcon;
      }else if(device.status === 'installed'){
        icon = this.co2YellowIcon;
      }else if(device.status === 'planned'){
        icon = this.co2RedIcon;
      }
    } else if(device.deviceType === 'soundSensor'){
      if(device.status === 'receiving'){
        icon = this.soundGreenIcon;
      }else if(device.status === 'installed'){
        icon = this.soundYellowIcon;
      }else if(device.status === 'planned'){
        icon = this.soundRedIcon;
      }
    }
    return icon;
  }

  

  addCampusOverlay( map ){
    //Adds a campus overlay to given map
    let svgElement = 'assets/map.png';
    let svgElementBounds = [ [ 65.06202, 25.46249 ], [ 65.056335, 25.47145 ] ];
    L.imageOverlay(svgElement, svgElementBounds).addTo(map);
  }

  addMarkersToMap( map ){
    //Loops through the sensors list and adds a marker with a popup to the map
    for(let i=0; i < this.sensors.length; i++){

      if(this.sensors[i].deviceType === 'co2Sensor'){
        let popup = '<p>Hello world!<br />This is a fancy popup.</p><br /><img class="popup" src="assets/ERSsensor.jpg">' + '<p>CO2 sensor looks like this ↑ <br/>Could this be used to display a picture of the mounting location?<p/>'
        L.marker([this.sensors[i].coordinates.latitude, this.sensors[i].coordinates.longitude], {icon: this.chooseIcon(this.sensors[i])}).addTo(map).bindPopup(popup);;

      } else if(this.sensors[i].deviceType === 'soundSensor'){

        let popup = '<p>Hello world!<br />This is a fancy popup.</p><br /><img class="popup" src="assets/ERSsensor.jpg">' + '<p>Sound sensor looks like this<p/>'
        L.marker([this.sensors[i].coordinates.latitude, this.sensors[i].coordinates.longitude], {icon: this.chooseIcon(this.sensors[i])}).addTo(map).bindPopup(popup);;

      }
    }
  }
  
  addNewDevice( event ) {
    this.deviceService.openNewDeviceDialog( event.latlng.lat, event.latlng.lng )
  }
}
