import { Component, OnInit } from '@angular/core';
import { SmartAudioService } from 'src/app/servicios/smart-audio.service';
import { LanguagesService } from 'src/app/servicios/lenguaje.service';
import { Languages } from '../../models/enums/lenguajes.enum';
import { timer } from 'rxjs';


@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  lenguaje;
  showSpinner=true;

  constructor(private smartAudioService: SmartAudioService, private languagesService: LanguagesService) {
    this.lenguaje = this.languagesService.getLanguage().toString();
  }

  ngOnInit() {
    timer(2000).subscribe(() => this.showSpinner = false) // <-- hide animation after 3s
  }

  public emitirSonido(eleccion: string) {
    this.lenguaje =this.languagesService.getLanguage();
    switch (eleccion) {
      case 'yellow':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('yellow');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('amarillo');
                }
                  else
                  {
 
                    this.smartAudioService.play('amarilloPor');
                  }
      break;
      case 'red':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('red');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('rojo');
                }
                  else
                  {

                    this.smartAudioService.play('rojoPor');
                  }
      break;
      case 'black':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('black');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('negro');
                }
                  else
                  {

                    this.smartAudioService.play('negroPor');
                  }
      break;
      case 'blue':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('blue');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('azul');
                }
                  else
                  {

                    this.smartAudioService.play('azulPor');
                  }
      break;
      case 'green':
          if(this.lenguaje === "English")
          {

            this.smartAudioService.play('green');
          }
              else if(this.lenguaje === "Spanish")
                {

              this.smartAudioService.play('verde');
                }
                  else
                  {

                    this.smartAudioService.play('verdePor');
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
