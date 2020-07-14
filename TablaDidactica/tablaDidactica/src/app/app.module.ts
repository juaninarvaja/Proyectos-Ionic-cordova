import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Vibration } from '@ionic-native/vibration/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule} from "@angular/fire/auth";
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage';
import { firebaseConfig } from '../environments/environment';
import { VentanaErrorComponent } from './page/ventana-error/ventana-error.component';
import { SmartAudioService } from './servicios/smart-audio.service';
import { AnimalsComponent } from './home/animals/animals.component';
import { ColorsComponent } from './home/colors/colors.component';
import { NumbersComponent } from './home/numbers/numbers.component';

@NgModule({
  declarations: [AppComponent,VentanaErrorComponent,AnimalsComponent,ColorsComponent,NumbersComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule],
  providers: [
    Vibration,
    SmartAudioService,
    StatusBar,
    NativeAudio,
    Camera,
    ImagePicker,
    SplashScreen,

    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
