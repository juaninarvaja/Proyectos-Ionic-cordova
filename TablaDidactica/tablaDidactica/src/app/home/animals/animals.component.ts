import { Component, OnInit, Input } from '@angular/core';
import { SmartAudioService } from 'src/app/servicios/smart-audio.service';
import { LanguagesService } from 'src/app/servicios/lenguaje.service';
import { Languages } from '../../models/enums/lenguajes.enum';
import { timer } from 'rxjs';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
 lenguaje;
 showSpinner=true;
 portugalflag = '../../../assets/img/flag-portugal.png';
  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
    this.lenguaje = this.languagesService.getLanguage().toString();
  }

  ngOnInit() {
    timer(2000).subscribe(() => this.showSpinner = false) // <-- hide animation after 3s
  }

  public emitirSonido(eleccion: string) {
    this.lenguaje =this.languagesService.getLanguage();
    switch (eleccion) {
      case 'monkey':
            if(this.lenguaje === "English")
            {

              this.smartAudioService.play('monkey');
            }
                else if(this.lenguaje === "Spanish")
                  {

                this.smartAudioService.play('mono');
                  }
                    else
                    {

                      this.smartAudioService.play('monoPor');
                    }
      break;
      case 'bird':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('bird');
          }
          else if(this.lenguaje === "Spanish")
          {

            this.smartAudioService.play('pajaro');
          }
          else
          {

            this.smartAudioService.play('pajaroPor');
          }
      break;
      case 'fox':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('fox');
          }
          else if(this.lenguaje === "Spanish")
          {

            this.smartAudioService.play('zorro');
          }
          else
          {

            this.smartAudioService.play('zorroPort');
          }
      break;
      case 'penguin':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('penguin');
          }
          else if(this.lenguaje === "Spanish")
          {

            this.smartAudioService.play('pinguino');
          }
          else
          {

            this.smartAudioService.play('pinguinoPor');
          }
      break;
      case 'elephant':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('elephant');
          }
          else if(this.lenguaje === "Spanish")
          {

            this.smartAudioService.play('elefante');
          }
          else
          {
            this.smartAudioService.play('elefantePor');
          }
      break;
      case'':
      console.log("nose rick");
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
