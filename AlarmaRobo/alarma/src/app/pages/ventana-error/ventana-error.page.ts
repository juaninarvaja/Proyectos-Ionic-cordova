import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-ventana-error',
  templateUrl: './ventana-error.page.html',
  styleUrls: ['./ventana-error.page.scss'],
})
export class VentanaErrorPage implements OnInit {


  constructor(private publicRouter:Router,  private vibration: Vibration) { }

  ngOnInit() {
    this.vibration.vibrate(2000);
  }
  mover(lugar){
    //this.aux = this.tomarFoto(lugar);
    this.publicRouter.navigate([lugar]);
  }

}
