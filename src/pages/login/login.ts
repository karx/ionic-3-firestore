import { BikerPage } from './../biker/biker';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RiderProvider } from '../../providers/rider/rider';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthProvider,
    private riderService: RiderProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if (this.authService.getLoggedInStatus() === true) {
      this.navCtrl.setRoot(BikerPage);
    }
  }
  attemptLogin() {
    this.authService.login()
      .then( (user) => {
        console.log(user);
        if (user) {
          this.riderService.updateRiderInfo( this.authService.getUser() );
          this.navCtrl.setRoot(BikerPage)
        } else {
          console.log('NW');
        }
      });
  }
}
