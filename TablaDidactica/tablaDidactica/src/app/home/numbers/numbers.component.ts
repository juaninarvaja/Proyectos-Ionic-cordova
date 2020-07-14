import { Component, OnInit } from '@angular/core';
import { SmartAudioService } from 'src/app/servicios/smart-audio.service';
import { LanguagesService } from 'src/app/servicios/lenguaje.service';
import { Languages } from '../../models/enums/lenguajes.enum';
import { timer } from 'rxjs';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  lenguaje:string;
  showSpinner=true;

  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
    this.lenguaje = this.languagesService.getLanguage().toString();
    console.log("el languaje es" + this.lenguaje);
  }

  ngOnInit() {
    timer(2000).subscribe(() => this.showSpinner = false) // <-- hide animation after 3s
  }

  public emitirSonido(eleccion: string) {
    this.lenguaje =this.languagesService.getLanguage();
    switch (eleccion) {
      case 'one':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('one');
          }
              else if(this.lenguaje === "Spanish")
                {
  
              this.smartAudioService.play('uno');
                }
                  else
                  {
        
                    this.smartAudioService.play('unoPor');
                  }
      break;
      case 'two':
          if(this.lenguaje === "English")
          {
         
            this.smartAudioService.play('two');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('dos');
                }
                  else
                  {

                    this.smartAudioService.play('dosPor');
                  }
      break;
      case 'three':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('three');
          }
              else if(this.lenguaje === "Spanish")
                {
        
              this.smartAudioService.play('tres');
                }
                  else
                  {
              
                    this.smartAudioService.play('tresPor');
                  }
      break;
      case 'four':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('four');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('cuatro');
                }
                  else
                  {

                    this.smartAudioService.play('cuatroPor');
                  }
      break;
      case 'five':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('five');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('cinco');
                }
                  else
                  {

                    this.smartAudioService.play('cincoPor');
                  }
      break;
    }
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
