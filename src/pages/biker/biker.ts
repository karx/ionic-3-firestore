import { RiderProvider } from './../../providers/rider/rider';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Coordinates } from '@ionic-native/geolocation';
import { DeviceMotion } from '@ionic-native/device-motion';
import { HiLocation } from '../../models/location';
import { Device } from '@ionic-native/device';
import { RiderlocationProvider } from '../../providers/riderlocation/riderlocation';
import { User } from 'firebase';

/**
 * Generated class for the BikerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biker',
  templateUrl: 'biker.html',
})
export class BikerPage {
  _user_uid: string = 'test';
  _device_uuid: string = 'test';
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  public totalPath: HiLocation[] = [];
  public _currentLocn: HiLocation;
  public _user: User;
  private _COLL: string = 'HiLocations';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private deviceMotion: DeviceMotion,
    private device: Device,
    private riderLocationService: RiderlocationProvider,
    private authService: AuthProvider,
    private riderService: RiderProvider

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BikerPage');
    this._user = this.authService.getUser();
    console.log(this._user);
    if (this._user) {
      this._user_uid = this._user.uid;
    }
    this.initMap();
  }

  getHiLocation(coords: Coordinates) {
    const returnLocation = new HiLocation();
    returnLocation.user_uid = this._user_uid;
    returnLocation.device_uuid = this.device.uuid;

    returnLocation.lat = coords.latitude;
    returnLocation.lng = coords.longitude;
    returnLocation.accuracy = coords.accuracy;

    returnLocation.altitude = coords.altitude;
    returnLocation.altitudeAccuracy = coords.altitudeAccuracy;
    returnLocation.heading = coords.heading;
    returnLocation.speed = coords.speed;

    returnLocation.timestamp = new Date().toISOString();
    return returnLocation;

  }
  updateHomingLocation(location: HiLocation) {
    this._currentLocn = location;
    this.riderService.updateRiderLastLocation(this._user, location);
  }
  getHistoricalData() {

  }
  logNewGeoData(location: HiLocation) {
    this.totalPath.push(location);
    this.riderLocationService.pushHiLocations(location);

  }
  calculateMetics() {

  }
  logMissedDataInstace(data: any) {
    console.log(data);
  }

  initMap() {
    this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
      .then((resp) => {
        const returnLocation = this.getHiLocation(resp.coords);

      this.updateHomingLocation(returnLocation);
    });
    let watch = this.geolocation.watchPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

    this.getHistoricalData();



    watch.subscribe((data) => {
      if (data && data.coords) {
        console.log(" New Data ", data);
        // this.deleteMarkers();
        // this.updateGeolocation(this.device.uuid, data.coords.latitude,data.coords.longitude);
        const returnLocation = this.getHiLocation(data.coords);

        this.logNewGeoData(returnLocation);
        this.updateHomingLocation(returnLocation);
        // this._firebase.updateStartOfTrip(this.device.uuid,data);
        this.calculateMetics();
      } else {
        this.logMissedDataInstace(data);
      }

    });


  }


}
