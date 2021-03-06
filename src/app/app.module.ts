import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BikerPage } from '../pages/biker/biker';

import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { DeviceMotion } from '@ionic-native/device-motion';
import { Device } from '@ionic-native/device';
import { ENV } from '../config/env';
import { AngularFireModule} from '@angular/fire';
import { RiderlocationProvider } from '../providers/riderlocation/riderlocation';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthProvider } from '../providers/auth/auth';
import { RiderProvider } from '../providers/rider/rider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BikerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot(ENV.gmapsAPI),
    AngularFireModule.initializeApp(ENV.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BikerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    DeviceMotion,
    Device,
    RiderlocationProvider,
    AuthProvider,
    RiderProvider
  ]
})
export class AppModule {}
