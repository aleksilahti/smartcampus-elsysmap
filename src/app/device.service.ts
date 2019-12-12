import { Injectable } from '@angular/core';
import * as uuid from '../../node_modules/uuid';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  sensors = [
    {deviceType: 'soundSensor', 
    status: 'planned',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu1', 
    coordinates: {latitude: 65.0580, longitude: 25.466}},

    {deviceType: 'co2Sensor', 
    status: 'planned',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu2', 
    coordinates: {latitude: 65.0581, longitude: 25.466}},

    {deviceType: 'soundSensor', 
    status: 'installed',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu3', 
    coordinates: {latitude: 65.0582, longitude: 25.466}},

    {deviceType: 'co2Sensor', 
    status: 'installed',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu4', 
    coordinates: {latitude: 65.0583, longitude: 25.466}},

    {deviceType: 'soundSensor', 
    status: 'receiving',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu5', 
    coordinates: {latitude: 65.0584, longitude: 25.466}},

    {deviceType: 'co2Sensor', 
    status: 'receiving',
    deviceId: 'installedDevicesId', 
    locationId: 'univOulu6', 
    coordinates: {latitude: 65.0585, longitude: 25.466}},
];
  overlayOpen;
  overlay;
  latitude;
  longitude;
  constructor() { }

  getSensors(){
    //sensors is a list of sensor objects this function is a placeholder for a database query
  return this.sensors;
  }

  openNewDeviceDialog(latitude?, longitude?){
    //open dialog
    this.latitude =  latitude;
    this.longitude = longitude;
    // triggers overlay at overlay component
    this.overlay = true;
    this.overlayOpen = uuid.v4();
    console.log(this.overlayOpen);
    /*console.log(this.sensors);
    const device = {deviceType: 'soundSensor', 
                    status: 'planned',
                    deviceId: 'installedDevicesId', 
                    locationId: 'univOulu1', 
                    coordinates: {latitude: latitude, longitude: longitude}};
    this.addDeviceToDatabase(device);*/
}

  addDeviceToDatabase( device ){
    console.log(this.sensors);
    this.sensors.push( device );
    console.log('added resource: ' + JSON.stringify(device));
    this.overlay = false;

  }
}