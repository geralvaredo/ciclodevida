import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string;

  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  public async signIn(usuario: Usuario) {
    return this.afAuth.signInWithEmailAndPassword(usuario.email, usuario.pass);
  }

  public async signOut() {
      await this.afAuth.signOut();
      this.router.navigate(['/']);
  }

  public async register(usuario: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.pass);
  }
}
