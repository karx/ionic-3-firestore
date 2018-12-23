webpackJsonp([5],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SurveyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SurveyProvider = (function () {
    function SurveyProvider(db) {
        this.db = db;
        this._COL = 'Surveys';
        this.surveysCollection = db.collection(this._COL);
        console.log('Hello RidersProvider Provider');
    }
    SurveyProvider.prototype.getAllSurveyByRider = function (uid) {
        return this.db.collection(this._COL, function (ref) { return ref.where('uid', '==', uid); })
            .snapshotChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    SurveyProvider.prototype.createNewSurvey = function (survey) {
        return this.surveysCollection.add(__assign({}, survey));
    };
    SurveyProvider.prototype.updateSurvey = function (survey) {
        return this.surveysCollection.doc(survey.id).update(__assign({}, survey));
    };
    SurveyProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], SurveyProvider);
    return SurveyProvider;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RiderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RiderProvider = (function () {
    function RiderProvider(db) {
        this.db = db;
        this._COL = 'Riders';
        this.ridersCollection = db.collection(this._COL);
        console.log('Hello RidersProvider Provider');
    }
    RiderProvider.prototype.getAllRiders = function () {
        return this.ridersCollection.valueChanges();
    };
    RiderProvider.prototype.createRiderInfo = function (userData) {
        return this.ridersCollection.doc(userData.uid).set({
            uid: userData.uid,
            displayName: userData.displayName,
            email: userData.email
        });
    };
    RiderProvider.prototype.updateRiderLastLocation = function (userData, location) {
        return this.ridersCollection.doc(userData.uid).update({
            last_location: __assign({}, location)
        });
    };
    RiderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], RiderProvider);
    return RiderProvider;
}());

//# sourceMappingURL=rider.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__survey_survey__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rider_rider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_device_motion__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_location__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_riderlocation_riderlocation__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the BikerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BikerPage = (function () {
    function BikerPage(navCtrl, navParams, geolocation, deviceMotion, device, riderLocationService, authService, riderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.deviceMotion = deviceMotion;
        this.device = device;
        this.riderLocationService = riderLocationService;
        this.authService = authService;
        this.riderService = riderService;
        this._user_uid = 'test';
        this._device_uuid = 'test';
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.totalPath = [];
        this._COLL = 'HiLocations';
    }
    BikerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BikerPage');
        this._user = this.authService.getUser();
        console.log(this._user);
        if (this._user) {
            this._user_uid = this._user.uid;
        }
        this.initMap();
    };
    BikerPage.prototype.getHiLocation = function (coords) {
        var returnLocation = new __WEBPACK_IMPORTED_MODULE_7__models_location__["a" /* HiLocation */]();
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
    };
    BikerPage.prototype.updateHomingLocation = function (location) {
        this._currentLocn = location;
        this.riderService.updateRiderLastLocation(this._user, location);
    };
    BikerPage.prototype.getHistoricalData = function () {
    };
    BikerPage.prototype.logNewGeoData = function (location) {
        this.totalPath.push(location);
        this.riderLocationService.pushHiLocations(location);
    };
    BikerPage.prototype.calculateMetics = function () {
    };
    BikerPage.prototype.logMissedDataInstace = function (data) {
        console.log(data);
    };
    BikerPage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true })
            .then(function (resp) {
            var returnLocation = _this.getHiLocation(resp.coords);
            _this.updateHomingLocation(returnLocation);
        });
        var watch = this.geolocation.watchPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
        this.getHistoricalData();
        watch.subscribe(function (data) {
            if (data && data.coords) {
                console.log(" New Data ", data);
                // this.deleteMarkers();
                // this.updateGeolocation(this.device.uuid, data.coords.latitude,data.coords.longitude);
                var returnLocation = _this.getHiLocation(data.coords);
                _this.logNewGeoData(returnLocation);
                _this.updateHomingLocation(returnLocation);
                // this._firebase.updateStartOfTrip(this.device.uuid,data);
                _this.calculateMetics();
            }
            else {
                _this.logMissedDataInstace(data);
            }
        });
    };
    BikerPage.prototype.startSurvey = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__survey_survey__["a" /* SurveyPage */]);
    };
    BikerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-biker',template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/biker/biker.html"*/'<!--\n  Generated template for the BikerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> Biker Page : {{_user?.displayName || _user?.email}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-fab bottom right>\n    <button ion-fab mini (click)="startSurvey()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <agm-map [latitude]="_currentLocn?.lat" [longitude]="_currentLocn?.lng">\n    <agm-marker *ngIf="_currentLocn" [latitude]="_currentLocn.lat" [longitude]="_currentLocn.lng"></agm-marker>\n    <agm-polyline>\n      <agm-polyline-point *ngFor="let hiLoc of totalPath" [latitude]="hiLoc.lat" [longitude]="hiLoc.lng">\n      </agm-polyline-point>\n    </agm-polyline>\n  </agm-map>\n</ion-content>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/biker/biker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_device_motion__["a" /* DeviceMotion */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__providers_riderlocation_riderlocation__["a" /* RiderlocationProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_rider_rider__["a" /* RiderProvider */]])
    ], BikerPage);
    return BikerPage;
}());

//# sourceMappingURL=biker.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_survey_survey__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_survey__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_each_survey_each__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyPage = (function () {
    function SurveyPage(navCtrl, navParams, authService, surveyService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.surveyService = surveyService;
        this.allSurveys = [];
        this.loggedInUser = this.authService.getUser();
        this.surveyService.getAllSurveyByRider(this.loggedInUser.uid)
            .subscribe(function (res) {
            console.log(res);
            _this.allSurveys = res;
        });
    }
    SurveyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyPage');
    };
    SurveyPage.prototype.startNewBtnClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__survey_each_survey_each__["a" /* SurveyEachPage */], {
            isNew: false,
            survey: new __WEBPACK_IMPORTED_MODULE_4__models_survey__["a" /* Survey */]()
        });
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-survey',template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/survey/survey.html"*/'<!--\n  Generated template for the SurveyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Happiness Questionare</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full (click)="startNewBtnClick()">Start new</button>\n    <ion-list>\n        <ion-item *ngFor="let eachSurvey of allSurveys" >\n          <ion-avatar item-start>\n            <!-- <img src="img/avatar-finn.png"> -->\n          </ion-avatar>\n          <h2>{{eachSurvey.person?.name || \'Unamed Questionare\'}}</h2>\n          <h3>{{eachSurvey.questions ? eachSurvey.questions.length : \'No Questions answered\'}}</h3>\n          <p>Recorded at: {{eachSurvey.timestamp}}</p>\n        </ion-item>\n      </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/survey/survey.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_survey_survey__["a" /* SurveyProvider */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/biker/biker.module": [
		545,
		4
	],
	"../pages/login/login.module": [
		546,
		3
	],
	"../pages/manage-document/manage-document.module": [
		547,
		0
	],
	"../pages/survey-each/survey-each.module": [
		548,
		2
	],
	"../pages/survey/survey.module": [
		549,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 267;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiderlocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__ = __webpack_require__(72);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RiderlocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RiderlocationProvider = (function () {
    function RiderlocationProvider(db) {
        this.db = db;
        this._COL = 'HiLocations';
        this.riderLocationCollection = db.collection(this._COL);
        console.log('Hello RiderlocationProvider Provider');
    }
    RiderlocationProvider.prototype.getHiLocations = function () {
        return this.riderLocationCollection.valueChanges();
    };
    RiderlocationProvider.prototype.getHiLocationsByUser = function (uid) {
        return this.db.collection(this._COL, function (ref) { return ref.where('user_uid', '==', uid); })
            .valueChanges();
    };
    RiderlocationProvider.prototype.pushHiLocations = function (location) {
        return this.riderLocationCollection.add(__assign({}, location));
    };
    RiderlocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], RiderlocationProvider);
    return RiderlocationProvider;
}());

//# sourceMappingURL=riderlocation.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__biker_biker__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rider_rider__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authService, riderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.riderService = riderService;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.authService.userSubject.subscribe(function (user) {
            if (user) {
                console.log('logged in');
                console.log(user);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__biker_biker__["a" /* BikerPage */]);
            }
        });
        if (this.authService.getLoggedInStatus() === true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__biker_biker__["a" /* BikerPage */]);
        }
    };
    LoginPage.prototype.attemptLogin = function () {
        var _this = this;
        this.authService.login()
            .then(function (user) {
            console.log(user);
            if (user) {
                _this.riderService.createRiderInfo(_this.authService.getUser());
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__biker_biker__["a" /* BikerPage */]);
            }
            else {
                console.log('NW');
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button (click)="attemptLogin()"> Login With Google </button>\n</ion-content>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rider_rider__["a" /* RiderProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import firebase and firestore


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http) {
        this.http = http;
        console.log('Hello DatabaseProvider Provider');
        this._DB = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
    }
    /**
    * Create the database collection and defines an initial document
    * Note the use of merge : true flag within the returned promise  - this
    * is needed to ensure that the collection is not repeatedly recreated should
    * this method be called again (we DON'T want to overwrite our documents!)
    */
    DatabaseProvider.prototype.createAndPopulateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .set(dataObj, { merge: true })
                .then(function (data) {
                resolve(data);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getDocuments = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        city: doc.data().city,
                        population: doc.data().population,
                        established: doc.data().established
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Add a new document to a selected database collection
     */
    DatabaseProvider.prototype.addDocument = function (collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Delete an existing document from a selected database collection
     */
    DatabaseProvider.prototype.deleteDocument = function (collectionObj, docID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Update an existing document within a selected database collection
     */
    DatabaseProvider.prototype.updateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(460);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_survey_each_survey_each__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_survey_survey__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_biker_biker__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_device_motion__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__config_env__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_fire__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_riderlocation_riderlocation__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rider_rider__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_survey_survey__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_question_bank_question_bank__ = __webpack_require__(544);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_biker_biker__["a" /* BikerPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_survey_each_survey_each__["a" /* SurveyEachPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__config_env__["a" /* ENV */].gmapsAPI),
                __WEBPACK_IMPORTED_MODULE_17__angular_fire__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__config_env__["a" /* ENV */].firebase),
                __WEBPACK_IMPORTED_MODULE_19__angular_fire_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_20__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/biker/biker.module#BikerPageModule', name: 'BikerPage', segment: 'biker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manage-document/manage-document.module#ManageDocumentPageModule', name: 'manage-document', segment: 'manage-document', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-each/survey-each.module#SurveyEachPageModule', name: 'SurveyEachPage', segment: 'survey-each', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyPageModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_biker_biker__["a" /* BikerPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_survey_survey__["a" /* SurveyPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_survey_each_survey_each__["a" /* SurveyEachPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_device_motion__["a" /* DeviceMotion */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_18__providers_riderlocation_riderlocation__["a" /* RiderlocationProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_rider_rider__["a" /* RiderProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_survey_survey__["a" /* SurveyProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_question_bank_question_bank__["a" /* QuestionBankProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questionBank; });
var questionBank = [
    {
        question_id: 'm2-01',
        phrase: "Please type your Colony Name, and District.",
        input_type: "text"
    },
    {
        question_id: 'm2-02',
        phrase: "What’s your gender?",
        input_type: "option",
        options: [
            { value: "Male" },
            { value: "Female" },
            { value: "Others" },
            { value: "Rather not say" }
        ]
    },
    {
        question_id: 'm2-03',
        phrase: "Thanks. What is your month and year of birth ?",
        input_type: "date",
    },
    {
        question_id: 'm2-04',
        phrase: "Select your highest education?",
        input_type: "option",
        options: [
            { value: "High School/ Higher Secondary" },
            { value: "MBA" },
            { value: "Intermediate/Senior Secondary" },
            { value: "MCA" },
            { value: "Polytechnic/Diploma" },
            { value: "MTech" },
            { value: "BA" },
            { value: "MBBS" },
            { value: "BSc" },
            { value: "MS/MD" },
            { value: "BCom" },
            { value: "LLM" },
            { value: "BBA" },
            { value: "MPhil" },
            { value: "BCA" },
            { value: "PhD General " },
            { value: "BE/BTech" },
            { value: "Civil services (IAS/IPS/IRS/IFS)" },
            { value: "LLB" },
            { value: "Illiterate" },
            { value: "MA" },
            { value: "School Up to 4 years" },
            { value: "MSc" },
            { value: "School 5-9 years" },
            { value: "MCom" },
            { value: "PhD Profession" },
            { value: "CA/ICWA/CS" },
            { value: "PG Diploma" }
        ]
    },
    {
        question_id: 'm2-05',
        phrase: "Select your current occupation?",
        input_type: "option",
        options: [
            { value: "Unskilled worker" },
            { value: "Skilled worker" },
            { value: "Petty Trader" },
            { value: "Shop owners/trader" },
            { value: "Businessman with no employee" },
            { value: "Student" },
            { value: "Housewife" },
            { value: "Retired" },
            { value: "Unemployed but searching for job" },
            { value: "Self-employed professional" },
            { value: "Clerical/salesman (Salaried)" },
            { value: "Supervisory level (Salaried)" },
            { value: "Junior level officer/executive (Salaried)" },
            { value: "Middle level officer/executive (Salaried)" },
            { value: "Senior level officer/executive (Salaried)" },
            { value: "Businessman/industrialist with 1-5 employees" },
            { value: "Businessman/industrialist with 6-10 employees" },
            { value: "Businessman/industrialist with 10-50 employees" },
            { value: "Businessman/industrialist with 50+ employees" },
            { value: "Unable to work due to health/other reason" }
        ]
    },
    {
        question_id: 'm2-06',
        phrase: "Which of these options best describes your marital status?",
        input_type: "option",
        options: [
            { value: "Single - living at home with parents" },
            { value: "Single - living alone" },
            { value: "Married & living in a joint family" },
            { value: "Married & living in a nuclear family" },
            { value: "Widowed" },
            { value: "Divorced" }
        ]
    },
    {
        question_id: 'm2-07m',
        phrase: "Please type the number of Male Members in your household",
        input_type: "text",
    },
    {
        question_id: 'm2-07f',
        phrase: "Please type the number of Female Members in your household",
        input_type: "text",
    },
    {
        question_id: 'm2-08',
        phrase: "Which of these durables do you currently have in your home?",
        input_type: "multi",
        options: [
            { value: "Electricity Connection" },
            { value: "Air Conditioner" },
            { value: "Car/Jeep/Van" },
            { value: "Ceiling Fan" },
            { value: "LPG Stove" },
            { value: "Colour TV" },
            { value: "Refrigerator" },
            { value: "Washing Machine" },
            { value: "Two Wheeler		" },
            { value: "Landline/Fixed Wireless Phone connection" },
            { value: "Laptop Computer" },
            { value: "Desktop Computer" },
            { value: "Tablet/Pads" },
            { value: "Agricultural Land (currently under cultivation or plantation)	" }
        ]
    }
];
//# sourceMappingURL=questionbank.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });
var Survey = (function () {
    function Survey() {
    }
    return Survey;
}());

//# sourceMappingURL=survey.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiLocation; });
var HiLocation = (function () {
    function HiLocation() {
    }
    return HiLocation;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_survey_each_survey_each__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = LoginPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_survey_each_survey_each__["a" /* SurveyEachPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, _DB, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Britain";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "Xy76Re34SdFR1";
        this._CONTENT = {
            city: "London",
            population: "8,787,892",
            established: "C. 43 AD"
        };
    }
    /**
     * Retrieve all documents from the specified collection using the
     * retrieveCollection method when the view is entered
     *
     * @public
     * @method ionViewDidEnter
     * @return {none}
     */
    HomePage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    HomePage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    HomePage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getDocuments(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addDocument
     * @return {none}
     */
    HomePage.prototype.addDocument = function () {
        this.navCtrl.push('manage-document');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    HomePage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('manage-document', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    HomePage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The record ' + obj.city + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    HomePage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cloud Firestore\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button\n    ion-button\n    block\n    color=\'primary\'\n    (click)=\'addDocument()\'>\n    Add a new record\n  </button>\n\n  <ion-list>\n    <ion-item *ngFor=\'let location of locations\'>\n      <h2>{{ location.city }}</h2>\n      <p>\n        Population: {{ location.population}}<br>\n        Established: {{ location.established }}\n      </p>\n\n      <button\n        ion-button\n        color=\'secondary\'\n        (click)=\'updateDocument(location)\'>\n        Update this record\n      </button>\n\n      <button\n        ion-button\n        color=\'danger\'\n        (click)="deleteDocument(location)">\n        Delete this record\n      </button>\n    </ion-item>\n  </ion-list>\n  <!-- <page-biker></page-biker> -->\n  \n</ion-content>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDd720Hu0-xkXGCFr7aFCMzJ4zB_gKwXUE",
        authDomain: "backpacking-87e01.firebaseapp.com",
        databaseURL: "https://backpacking-87e01.firebaseio.com",
        projectId: "backpacking-87e01",
        storageBucket: "backpacking-87e01.appspot.com",
        messagingSenderId: "605407740439"
    },
    gmapsAPI: {
        apiKey: 'AIzaSyAZBaESnwAadnwOjsZAQhPnzw2YWoPbb-8'
    }
};
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBankProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuestionBankProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuestionBankProvider = (function () {
    function QuestionBankProvider(db) {
        this.db = db;
        this._COL = 'Quetions';
        this.questionCollections = db.collection(this._COL);
        console.log('Hello RidersProvider Provider');
    }
    QuestionBankProvider.prototype.getAllQuestions = function () {
        return this.questionCollections.valueChanges();
    };
    QuestionBankProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_firestore__["a" /* AngularFirestore */]])
    ], QuestionBankProvider);
    return QuestionBankProvider;
}());

//# sourceMappingURL=question-bank.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    // public userObservable: Subject<User> = new;
    function AuthProvider(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["ReplaySubject"](1);
        this.afAuth.authState.subscribe(function (user) {
            _this.user = user;
            // this.userObservable.next(this.user);
            _this.userSubject.next(_this.user);
            console.log(_this.user);
        });
    }
    AuthProvider.prototype.login = function () {
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider());
    };
    AuthProvider.prototype.getLoggedInStatus = function () {
        console.log(this.user);
        console.log(this.user && this.user !== null);
        return (this.user && this.user !== null);
    };
    AuthProvider.prototype.getUser = function () {
        return this.user;
    };
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEachPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_questionbank__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_survey_survey__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SurveyEachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyEachPage = (function () {
    function SurveyEachPage(navCtrl, navParams, authService, surveyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.surveyService = surveyService;
        this.totalQuestionBank = __WEBPACK_IMPORTED_MODULE_0__config_questionbank__["a" /* questionBank */];
        this._survey = this.navParams.get('survey');
        this.isNew = this.navParams.get('isNew');
    }
    SurveyEachPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyEachPage');
        console.log(this.totalQuestionBank);
    };
    SurveyEachPage.prototype.getImageFromCamera = function () {
    };
    SurveyEachPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-survey-each',template:/*ion-inline-start:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/survey-each/survey-each.html"*/'<!--\n  Generated template for the SurveyEachPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Live-Collection Room</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button icon-end (click)="getImageFromCamera()">\n    Add Image\n    <ion-icon name="camera"></ion-icon>\n  </button>\n  <ion-list>\n    <ion-item *ngFor="let eachQuestion of totalQuestionBank">\n      <ion-card>\n        <!-- <img src="img/nin-live.png" /> -->\n        <ion-card-content>\n          <ion-card-title>\n            {{eachQuestion.phrase}}\n          </ion-card-title>\n          <div class="answer">\n            <input\n              [(ngModel)]="eachQuestion.answer"\n              *ngIf="eachQuestion.input_type === \'text\'">\n\n            <select\n              [(ngModel)]="eachQuestion.answer"\n              *ngIf="eachQuestion.input_type === \'option\'">\n                <option *ngFor="let eachOption of eachQuestion.options" value="eachOption.value">\n                  {{eachOption.value}}\n                </option>\n            </select>\n            <!-- <ion-item>\n                <ion-label>Date</ion-label>\n                <ion-datetime\n                [(ngModel)]="eachQuestion.answer"\n                displayFormat="MM/DD/YYYY" >\n              </ion-datetime>\n            </ion-item> -->\n            <!-- <input\n            [(ngModel)]="eachQuestion.answer"\n            type="datetime-local"\n            *ngIf="eachQuestion.input_type === \'date\'"\n            > -->\n            <!-- <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate"></ion-datetime> -->\n\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kaaro/Desktop/src/ionic-3-firestore/src/pages/survey-each/survey-each.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_survey_survey__["a" /* SurveyProvider */]])
    ], SurveyEachPage);
    return SurveyEachPage;
}());

//# sourceMappingURL=survey-each.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map