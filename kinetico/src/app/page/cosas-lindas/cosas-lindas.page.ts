import { Component, OnInit } from '@angular/core';
import { FotosService, Votos } from 'src/app/servicios/foto.service';
import { Router } from "@angular/router"
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Voto } from 'src/app/models/voto';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cosas-lindas',
  templateUrl: './cosas-lindas.page.html',
  styleUrls: ['./cosas-lindas.page.scss'],
})
export class CosasLindasPage implements OnInit {

  constructor(private publicRouter:Router,private camera: Camera,private subir:FotosService, private AFAuth: AuthService) { }
  arrayCosasLindas=[];
  arrayMisCosasLindas=[];
  modo:string;
  liked:boolean = false;
  ngOnInit() {
    this.ObtenerLindasDeBase();
    this.ObtenerMisLindasDeBase();
    this.modo="allPhotos";
  }

  tomarFoto(tipo){
    const camOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: true,
      correctOrientation: true,
    };
    this.camera.getPicture(camOptions).then(async (pictureAux) => {
      // Send the picture to Firebase Storage
      this.subir.UploadToFirebase(pictureAux, tipo); //aca cambie por firesore a ver q onda
    }, error => {
      console.log(error);
      if (error === 'No Image Selected') {
        console.log(error);
      } else {
        console.log(error);
      }
      console.log(error);
    }).catch(err => {
      console.log(err);
    });
  }


  private async ObtenerLindasDeBase() {

    this.subir.ObtenerFotos().subscribe(async (fotos) => {
      this.arrayCosasLindas = this.subir.FiltrarFotos(fotos, 'linda');
      
      this.OrderByDate();
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
      
      console.log(this.arrayMisCosasLindas);
    });
  }

  private async ObtenerMisLindasDeBase() {

    this.subir.ObtenerFotos().subscribe(async (fotos) => {
      this.arrayMisCosasLindas = this.subir.FiltrarFotosMias(fotos, 'linda');
      console.log(this.arrayCosasLindas);
      this.OrderByDate();
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
      console.log(this.arrayCosasLindas);
    });
  }

  private OrderByDate() {
    this.arrayCosasLindas= this.arrayCosasLindas.sort((a, b) => {
      return b.fecha.localeCompare(a.fecha);
    });
  }
  
  public likear(dato:any){
//llamar al likear el servicio foto
    this.subir.EditarFoto(dato);
  }

}