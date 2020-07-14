import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ventana-error',
  templateUrl: './ventana-error.component.html',
  styleUrls: ['./ventana-error.component.scss'],
})
export class VentanaErrorComponent implements OnInit {

  constructor(private publicRouter:Router) { }

  ngOnInit() {}
  mover(lugar){
    //this.aux = this.tomarFoto(lugar);
    this.publicRouter.navigate([lugar]);
  }

}
