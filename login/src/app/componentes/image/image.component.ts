import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';
import { NavParams, ModalController } from '@ionic/angular';
import { ImagesService } from 'src/app/servicios/images.service';
import { Voto } from 'src/app/models/voto';
import { ToastService } from 'src/app/servicios/toast.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() images: Image[];
  @Input() startIndex: Number;
  @Input() uid: string;



  slideOpts;
// tslint:disable-next-line: max-line-length
  constructor(navParams: NavParams, private modalController: ModalController, private imagesService: ImagesService, private toastService: ToastService) {
    console.clear();
    console.log(navParams);
    this.images = navParams.data.images;
    this.uid = navParams.data.uid;
    this.startIndex = navParams.data.startIndex;
    this.slideOpts = {
      effect: 'slide',
      initialSlide: this.startIndex
    };
    console.log(this.images);
  }

  ngOnInit() {}

  // votar(index: number) {
  //   console.log('votó ' + index);
  //   const image: Image = this.images[index];

  //   if (this.verificarVotacion(index)) { // Ya votó esta foto.
  //     // Remueve el voto de este usuario.
  //     image.votos = image.votos.filter( voto => {
  //       return voto.uid !== this.uid;
  //     });
  //   } else { // No votó todavía.
  //     if (!image.votos) {
  //       image.votos = new Array();
  //     }
  //     image.votos.push(new Voto(this.uid));
  //   }

  //   this.imagesService.updateItem(image.key, image)
  //   .catch(error => {
  //     this.toastService.errorToast('Ocurrió un error al votar. ' + error.message);
  //   });
  // }

  // // Verifica si el usuario ya votó.
  // verificarVotacion(index: number): boolean {
  //   const image: Image = this.images[index];
  //   let respuesta = false;

  //   if (!image.votos) {
  //     return false;
  //   }

  //   for (let i = 0; i < image.votos.length; i++) {
  //     const voto = image.votos[i];
  //     if (voto.uid === this.uid) {
  //       respuesta = true;
  //       break;
  //     }
  //   }

  //   return respuesta;
  // }

  // cantidadDeVotos(index: number): number {
  //   if (this.images && this.images[index].votos) {
  //     return this.images[index].votos.length;
  //   } else {
  //     return 0;
  //   }
  // }

  eliminar(index: number) {
    this.imagesService.deleteItem(this.images[index].key)
    .then(res => {
      this.images.splice(index);
      this.toastService.confirmationToast('Foto eliminada correctamente.');
      this.modalController.dismiss();
    })
    .catch(error => {
      this.toastService.errorToast('Ocurrió un error. ' + error.message);
    });
  }

}