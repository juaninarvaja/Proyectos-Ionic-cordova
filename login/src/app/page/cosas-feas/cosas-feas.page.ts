  
import { Component, OnInit } from '@angular/core';
import { FotosService } from 'src/app/servicios/foto.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from "@angular/router"
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cosas-feas',
  templateUrl: './cosas-feas.page.html',
  styleUrls: ['./cosas-feas.page.scss'],
})
export class CosasFeasPage implements OnInit {
  constructor(private publicRouter:Router,private camera: Camera,private subir:FotosService, private AFAuth: AuthService) { }
  arrayCosasFeas=[];
  arrayMisCosasFeas=[];
  modo:string;

  ngOnInit() {
    this.ObtenerFeasDeBase();
    this.ObtenerMisFeasDeBase();
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
  private async ObtenerFeasDeBase() {

    this.subir.ObtenerFotos().subscribe(async (fotos) => {
      this.arrayCosasFeas = this.subir.FiltrarFotos(fotos, 'fea');
      console.log(this.arrayCosasFeas);
      this.OrderByDate();
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
      console.log(this.arrayCosasFeas);
    });
    
  }

  private async ObtenerMisFeasDeBase() {

    this.subir.ObtenerFotos().subscribe(async (fotos) => {
      this.arrayMisCosasFeas = this.subir.FiltrarFotosMias(fotos, 'fea');
      console.log(this.arrayCosasFeas);
      this.OrderByDate();
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
      console.log(this.arrayCosasFeas);
    });
  }

  private OrderByDate() {
    this.arrayCosasFeas= this.arrayCosasFeas.sort((a, b) => {
      return b.fecha.localeCompare(a.fecha);
    });
  }

  public likear(dato:any){
    //llamar al likear el servicio foto
        this.subir.EditarFoto(dato);
      }
}