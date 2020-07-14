import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LanguagesService} from '../servicios/lenguaje.service'
import { Languages } from 'src/app/models/enums/lenguajes.enum';
import { SmartAudioService } from 'src/app/servicios/smart-audio.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  language: string;
  showSpinner=true;
  constructor(private languagesService: LanguagesService, private smartAudioService: SmartAudioService) {
    this.language = this.languagesService.getLanguage().toString();
  }

  ngOnInit() {
    timer(2000).subscribe(() => this.showSpinner = false) // <-- hide animation after 3s

  }

  languageChanged(valor) {
    // const language: Languages = event.detail.value === 'English' ? Languages.English : Languages.Spanish;
    // const language: Languages = event.detail.value 
    const language:Languages = valor;
    this.languagesService.changeLanguage(language);
    //this.smartAudioService.play(language === Languages.English ? 'emma' : 'Isabella');
  }
  cambiarSpinner() {
    this.showSpinner = !(this.showSpinner);
  }
}