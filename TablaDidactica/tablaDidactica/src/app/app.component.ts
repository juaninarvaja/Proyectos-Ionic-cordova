import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Sound } from './models/sound';
import { SmartAudioService } from './servicios/smart-audio.service';
import { timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private smartAudioService: SmartAudioService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(5000).subscribe(()=>{this.showSplash=false;}) // <-- hide animation after 3s

    });


    let sounds: Sound[] = new Array<Sound>();
  
    sounds.push(new Sound('login', 'assets/sounds/login.mp3'));
    sounds.push(new Sound('error', 'assets/sounds/error-wooden.mp3'));
    sounds.push(new Sound('boop', 'assets/sounds/click.mp3'));
    sounds.push(new Sound('confirmation', 'assets/sounds/confirmation.mp3'));

    sounds.push(new Sound('elefante', 'assets/sounds/elefante.ogg'));
    sounds.push(new Sound('elephant', 'assets/sounds/elephant.ogg'));
    sounds.push(new Sound('elefantePor', 'assets/sounds/elefantePor.ogg'));


    sounds.push(new Sound('mono', 'assets/sounds/mono.ogg'));
    sounds.push(new Sound('monkey', 'assets/sounds/monkey.ogg'));
    sounds.push(new Sound('monoPor', 'assets/sounds/monoPor.ogg'));

    sounds.push(new Sound('pajaro', 'assets/sounds/pajaro.ogg'));
    sounds.push(new Sound('bird', 'assets/sounds/bird.ogg'));
    sounds.push(new Sound('pajaroPor', 'assets/sounds/pajaroPor.ogg'));

    sounds.push(new Sound('zorro', 'assets/sounds/zorro.ogg'));
    sounds.push(new Sound('fox', 'assets/sounds/fox.ogg'));
    sounds.push(new Sound('zorroPort', 'assets/sounds/zorroPort.ogg'));

    sounds.push(new Sound('pinguino', 'assets/sounds/pinguino.ogg'));
    sounds.push(new Sound('penguin', 'assets/sounds/penguin.ogg'));
    sounds.push(new Sound('pinguinoPor', 'assets/sounds/pinguinoPor.ogg'));
    // -----/////////----------------------------------------------------
    sounds.push(new Sound('amarillo', 'assets/sounds/amarillo.ogg'));
    sounds.push(new Sound('yellow', 'assets/sounds/yellow.ogg'));
    sounds.push(new Sound('amarilloPor', 'assets/sounds/amarilloPor.ogg'));


    sounds.push(new Sound('negro', 'assets/sounds/negro.ogg'));
    sounds.push(new Sound('black', 'assets/sounds/black.ogg'));
    sounds.push(new Sound('negroPor', 'assets/sounds/negroPor.ogg'));

    sounds.push(new Sound('rojo', 'assets/sounds/rojo.ogg'));
    sounds.push(new Sound('red', 'assets/sounds/red.ogg'));
    sounds.push(new Sound('rojoPor', 'assets/sounds/rojoPor.ogg'));

    sounds.push(new Sound('verde', 'assets/sounds/verde.ogg'));
    sounds.push(new Sound('green', 'assets/sounds/green.ogg'));
    sounds.push(new Sound('verdePor', 'assets/sounds/verdePor.ogg'));

    sounds.push(new Sound('azul', 'assets/sounds/azul.ogg'));
    sounds.push(new Sound('blue', 'assets/sounds/blue.ogg'));
    sounds.push(new Sound('azulPor', 'assets/sounds/azulPor.ogg'));
    
// -----/////////----------------------------------------------------
    sounds.push(new Sound('uno', 'assets/sounds/Uno.ogg'));
    sounds.push(new Sound('one', 'assets/sounds/one.ogg'));
    sounds.push(new Sound('unoPor', 'assets/sounds/unoPor.ogg'));


    sounds.push(new Sound('dos', 'assets/sounds/dos.ogg'));
    sounds.push(new Sound('two', 'assets/sounds/two.ogg'));
    sounds.push(new Sound('dosPor', 'assets/sounds/dosPor.ogg'));

    sounds.push(new Sound('tres', 'assets/sounds/tres.ogg'));
    sounds.push(new Sound('three', 'assets/sounds/three.ogg'));
    sounds.push(new Sound('tresPor', 'assets/sounds/tresPor.ogg'));

    sounds.push(new Sound('cuatro', 'assets/sounds/cuatro.ogg'));
    sounds.push(new Sound('four', 'assets/sounds/four.ogg'));
    sounds.push(new Sound('cuatroPor', 'assets/sounds/cuatroPor.ogg'));

    sounds.push(new Sound('cinco', 'assets/sounds/cinco.ogg'));
    sounds.push(new Sound('five', 'assets/sounds/five.ogg'));
    sounds.push(new Sound('cincoPor', 'assets/sounds/cincoPor.ogg'));


    this.smartAudioService.preload(sounds);
  }
}
