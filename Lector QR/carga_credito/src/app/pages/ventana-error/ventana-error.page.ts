import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ventana-error',
  templateUrl: './ventana-error.page.html',
  styleUrls: ['./ventana-error.page.scss'],
})
export class VentanaErrorPage implements OnInit {

  constructor(private publicRouter:Router) { }

  ngOnInit() {
  }
  mover(lugar:any){
    //this.aux = this.tomarFoto(lugar);
    this.publicRouter.navigate([lugar]);
  }
}
