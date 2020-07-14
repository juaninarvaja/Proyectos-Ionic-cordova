import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';
import {QrService} from '../servicios/qr.service'
import { ResourceLoader } from '@angular/compiler';
import { timer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  zbarOptions:any;
  scannedResult:any = 0;
  qrsArray=[];
  MisqrsArray=[];
  showSpinner=true;
 
  constructor(
    private zbar: ZBar,
    public toastController: ToastController,
    public Qr:QrService
  ) {
 
    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }
 
  }
  ngOnInit() {
    this.ObtenerQrsDeBase();
    this.ObtenerMisQrsDeBase();
    timer(2000).subscribe(() => this.showSpinner = false) 
  }
  scanCode(){
    this.zbar.scan(this.zbarOptions)
   .then(result => {
      let diez = this.scannedResult == 10;
      let cincuenta = this.scannedResult == 50;
      let sesenta = this.scannedResult == 60;
      let cien = this.scannedResult == 100;
      let cientodiez = this.scannedResult == 110;
      let cientocincuenta = this.scannedResult == 150;
      let cientosesenta = this.scannedResult == 160;
      if(result=='2786f4877b9091dcad7f35751bfcf5d5ea712b2f'){
        if(!this.Qr.QrEstaUtilizado(result,this.qrsArray)){
          this.Qr.AgregarDuenioQr(result);
          this.ObtenerMisQrsDeBase();
          return
        }
        else { 
          this.presentToast2()
          return}
      }
      let ex:string = result;
      if(ex.includes('e4bcffaf9ce5b409f')){
        if(!this.Qr.QrEstaUtilizado(result,this.qrsArray)){
          this.Qr.AgregarDuenioQr(result);
          this.ObtenerMisQrsDeBase();
          return
        }
        else {        this.presentToast2()
          return}

      }

      if(result=='8c95def646b6127282ed50454b73240300dccabc'){
        if(!this.Qr.QrEstaUtilizado(result,this.qrsArray)){
          this.Qr.AgregarDuenioQr(result);
          this.ObtenerMisQrsDeBase();
          return
        }
        else { 
          this.presentToast2()
          return}
      }
      this.presentToast()
   })
   .catch(error => {
      this.presentToast()
      alert(error); // Error message
   });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Error codigo QR invalido',
      duration: 3000,
      color:"dark",
      showCloseButton:true
    });
    toast.present();
  }

  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Error codigo QR ya escaneado',
      duration: 3000,
      color:"dark",
      showCloseButton:true
    });
    toast.present();
  }

  Borrar(){
    this.Qr.VaciarQrsUsuarioActivo(this.MisqrsArray);
    this.ObtenerMisQrsDeBase(); //deberia poner en 0 el contador
  }
  
  private async ObtenerQrsDeBase() {

    this.Qr.ObtenerQrs().subscribe(async (fotos) => {
      this.qrsArray = fotos;
      console.log("Array de todos los qr");
      console.log(this.qrsArray);
      
   
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
      
    });
  }

  private async ObtenerMisQrsDeBase() {

    this.Qr.ObtenerQrs().subscribe(async (fotos) => {
      this.MisqrsArray = this.Qr.FiltrarQrsMias(this.qrsArray);
      this.scannedResult = this.Qr.SumaMisQrs(this.MisqrsArray);
      console.log("Array de todos los qr de usuario activo");
      console.log(this.MisqrsArray);
      // this.arrayCosasLindas= this.arrayCosasLindas.reverse();
    });
  }
  // private async ObtenerSaldoMisQrs(){

  //   this.Qr.SumaMisQrs(this.MisqrsArray).subscribe(async(a) => {

  //   })
  // }

  // public async cargar100()
  // {
  //   let result='2786f4877b9091dcad7f35751bfcf5d5ea712b2f';
  //   let bool:boolean = this.Qr.QrEstaUtilizado(result,this.qrsArray);
  //   console.log("el booleano q llega es");
  //   console.log(bool);
  //   if(!this.Qr.QrEstaUtilizado(result,this.qrsArray)){
     
  //     this.Qr.AgregarDuenioQr(result);
  //     this.ObtenerMisQrsDeBase();
  //     return
  //   }
  //   else { 
  //     this.presentToast2()
  //     return}

  // }
}
