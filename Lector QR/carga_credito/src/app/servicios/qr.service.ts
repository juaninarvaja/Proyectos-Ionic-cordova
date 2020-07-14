import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/internal/operators/map';
import { AuthService } from './auth.service';
import { NumberValueAccessor } from '@angular/forms';

export interface QRS {
  path: string;
  usuario: string;
  valor: number;
  id:string;
}

@Injectable({
  providedIn: 'root'
})

export class QrService {

  constructor(    private MiAuth: AngularFireAuth,
    private fireStorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private authAF: AuthService) { }

  /** Conecta con firebase para subir los datos de la foto a la tabla de 'qr'*/
  public async UploadToFirestore(pathr: string){
    // Add a new document with a generated id.
    const addDoc: any = this.firestore.collection('qr').add({
      usuario: this.MiAuth.auth.currentUser.email,
      path: pathr
    // })
    // .then(ref => {
    //   this.firestore.collection('qr').add({
    //     fotoId: ref.id,
    //     usuario: '[]'
    //   }).then(() => {
    //       "Error handler hacer"

      // }).catch((err) => {
      //   console.log('Error al aÃ±adir en Votos', err);
      //   ref.delete();
      // });
    }).catch(err => {
      console.log('Error al añadir qrs', err);
    });
  }
    /** Conecta con firebase para obtener todas los qr */
    public ObtenerQrs() {
      return this.firestore.collection('qr').snapshotChanges().pipe(map((qrs) => {
        return qrs.map((a) => {
          const data = a.payload.doc.data() as QRS;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
    }
        /** Conecta con firebase para obtener todas los qr de el usuario activo*/
        /** Esta no es de firebase, es un filtrado de fotos */
      public FiltrarQrsMias(qrs: Array<QRS>): Array<QRS> {
        const auxReturn = new Array<QRS>();
        const auxuser  = this.authAF.getCurrentUserMail();
        console.log("auxUser");
        console.log(auxuser);
        for (const qrAux of qrs) {
         
            if(qrAux.usuario === auxuser.toString())
            {
              auxReturn.push(qrAux);
            }
        }
        return auxReturn;
      }

    public  QrEstaUtilizado(qrPath:string,misQrs:Array<QRS>) {
      let retorno = true;
      for(const qrAux of misQrs)
      {
       if(qrAux.path == qrPath)
       {
         if(qrAux.usuario == '')
         {
           console.log("usuario vacio");
           return false;
         }
         else
         {
           return true;
         }
       }
      }
      return retorno;
    }
    public async VaciarQrsUsuarioActivo(misQrs:Array<QRS>) {
      for(const qrAux of misQrs)
      {
        this.SacarDuenioQr(qrAux.path);
      }
    }
  
    public  SumaMisQrs(misQrs: Array<QRS>){
      let sumaValores = 0;
      for(const qrAux of misQrs)
      {
      
        sumaValores += qrAux.valor;
      }
      console.log("la suma de los valores es");
      console.log(sumaValores);
      return sumaValores;
    }

    public async AgregarDuenioQr(qrPath: string ) {

      // console.log(foto.id);
      let qrAux: QRS = null;
      const user = this.MiAuth.auth.currentUser.email;
  
      await this.firestore.collection('qr').ref.where('path', '==', qrPath).get().then(async (documento) => {
        qrAux = documento.docs[0].data() as QRS;
        qrAux.id = documento.docs[0].id;
  
        // console.log('EncontrÃ© el voto', votos.users);
  
        // const auxUsers: Array<string> = JSON.parse(qrAux.users);
        // if (this.ValidarUser(user, auxUsers)) {
        //   foto.votos++;
        //   auxUsers.push(user);
        //   votos.users = JSON.stringify(auxUsers);
  
          // console.log('Voy a setear los qr');
          this.firestore.collection('qr').doc(qrAux.id).set({
            path: qrPath,
            usuario: user,
            valor:qrAux.valor
            
  
      });
         }).catch(err => {
            console.log('Error en get de los qrs', err);
          });
    }
  
    public async SacarDuenioQr(qrPath: string ) {

      // console.log(foto.id);
      let qrAux: QRS = null;
      const user = this.MiAuth.auth.currentUser.email;
  
      await this.firestore.collection('qr').ref.where('path', '==', qrPath).get().then(async (documento) => {
        qrAux = documento.docs[0].data() as QRS;
        qrAux.id = documento.docs[0].id;

        //hago esto para q no pase
        console.log(qrAux);
        if(true){
          this.firestore.collection('qr').doc(qrAux.id).set({
            path: qrPath,
            usuario: '',
            valor : qrAux.valor
            
  
      });
        }
        // console.log('EncontrÃ© el voto', votos.users);
  
        // const auxUsers: Array<string> = JSON.parse(qrAux.users);
        // if (this.ValidarUser(user, auxUsers)) {
        //   foto.votos++;
        //   auxUsers.push(user);
        //   votos.users = JSON.stringify(auxUsers);
  
          // console.log('Voy a setear los qr');
   
         }).catch(err => {
            console.log('Error en get de los qrs', err);
          });
    }

}
