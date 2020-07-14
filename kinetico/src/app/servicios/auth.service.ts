import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"
import { promise } from 'protractor';
import { SpinnerService } from './spinner.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,private spinner: SpinnerService,private router: Router) { }

  login(email:string,password:string) {
    // this.spinner.show();
    return new Promise((resolve,rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
    
  }
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData))
        .catch(err => reject(err));
    });
  }

  getCurrentUserId(): string {
    return this.AFauth.auth.currentUser ? this.AFauth.auth.currentUser.uid : null;
  }

  getCurrentUserMail(): string {
    return this.AFauth.auth.currentUser.email;
  }
  logout() {
    this.AFauth.auth.signOut()
    .then( res => {
      this.router.navigate(['/login']);
    });
  }
  // obtenerUsuarioActivo() {
  //   return this.AFauth.auth.currentUser.email.toString();
  
  //   }
}

