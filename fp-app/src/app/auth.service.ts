import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, from, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  public isLoggedIn$ = new BehaviorSubject<any>(null).asObservable();

  doGoogleLogin() {
    this.isLoggedIn$ = from(new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      this.afAuth.auth
        .signInWithRedirect(provider)
        // .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    }));
  }
}
