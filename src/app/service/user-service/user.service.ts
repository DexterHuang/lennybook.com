import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from 'app/Model/User';
@Injectable()
export class UserService {
  currentFirebaseUser;
  currentUser: User;
  constructor() {

  }
  init() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentFirebaseUser = user;
        const ref = firebase.database().ref('users/' + user.uid);
        ref.once('value', e => {
          const u: User = new User();
          if (e.exists()) {
            Object.assign(u, e.val());
            this.currentUser = u;
          } else {
            u.displayName = user.displayName;
            u.photoURL = user.photoURL;
            u.email = user.email;
            this.currentUser = u;
            ref.set(u, () => {

            });
          }
        })
      } else {
        this.currentFirebaseUser = null;
      }
    });
  }
  isLogedin() {
    if (this.currentFirebaseUser) {
      return true;
    }
    return false;
  }
  logout() {
    firebase.auth().signOut();
    this.currentFirebaseUser = null;
    this.currentUser = null;
  }
  isAdmin() {
    if (this.currentUser) {
      return this.currentUser.isAdmin;
    }
    return false;
  }
}
