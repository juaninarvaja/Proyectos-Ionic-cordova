import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service"
import { Router } from "@angular/router"
import { Roles } from 'src/app/models/enums/roles.enum';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  form: FormGroup;
  password:string;
  
  mostrar=false;
  constructor(private authService : AuthService, public router : Router) { }

  ngOnInit() {
  }

  onSubmitLogin()
  {
   
    this.authService.login(this.email,this.password).then(res => {
        this.router.navigate(['/main/animals'])
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