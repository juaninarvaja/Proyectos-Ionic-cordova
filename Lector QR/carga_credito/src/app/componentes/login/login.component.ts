import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import {AuthService} from '../../servicios/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  form: FormGroup;
  password:string;
  showSpinner=true;
  mostrar=false;
  constructor(private authService : AuthService, public router : Router) { }

  ngOnInit() {}
  onSubmitLogin()
  {
    this.authService.login(this.email,this.password).then(res => {
        this.router.navigate(['/home'])
    //  }).catch(err => alert('los datos son incorrectos ono existe el usuario'));
   }).catch(err => this.router.navigate(['ventana-error']));
  }

registrarse()
{
  this.mostrar=true;
}
regresar() {
  this.mostrar=false;
}

aceptar() {
  console.log(this.email + this.password);
  this.authService.registerUser(this.email,this.password)
  .then(res => {
    this.router.navigate(['/home']);
    // this.msjError =  "Usuario creado!"
    }).catch(err => this.router.navigate(['ventana-error']));
  } 
  cargarDatos(rol) {
    switch (rol) {
      case "admin":
        this.email = 'admin@admin.com';
        this.password = '111111';
        // console.log("entra al admin switch");
        this.onSubmitLogin();
        break;
      case "invitado":
          this.email = 'invitado@invitado.com';
          this.password = '222222';
          this.onSubmitLogin();
        break;
        case "usuario":
            this.email = 'usuario@usuario.com';
            this.password = '333333';
            this.onSubmitLogin();
        break;
        case "anonimo":
            this.email = 'anonimo@anonimo.com';
            this.password = '444444';
            this.onSubmitLogin();
        break;
        case "tester":
            this.email = 'tester@tester.com';
            this.password = '555555';
            this.onSubmitLogin();
        break;
    }
  }

}
