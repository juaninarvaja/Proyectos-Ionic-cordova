import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { firebaseConfig } from "../environments/environment"
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { Camera} from '@ionic-native/camera/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFireDatabase } from '@angular/fire/database';
import { SmartAudioService } from './servicios/smart-audio.service';

// import { LoginPage } from "../../src/app/componentes/login/login.page"
import {VentanaErrorComponent} from "./page/ventana-error/ventana-error.component";
import { FotosService } from './servicios/foto.service';
@NgModule({
  declarations: [
    AppComponent, 
    VentanaErrorComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireStorageModule
    ],
  providers: [
    NativeAudio,
    AngularFireDatabase,
    Camera,
    Vibration,
    SmartAudioService,
    FotosService,
    ImagePicker,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
