import { Album } from './../Model/Album';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AlbumService {
  albums: Album[] = []
  initiated = false;
  constructor() {
    firebase.database().ref('albums').on('value', e => {
      if (e.exists()) {
        const o = e.val();
        this.albums = [];
        Object.keys(o).forEach(key => {
          const a = new Album();
          Object.assign(a, o[key]);
          this.albums.push(a);
        });
        this.initiated = true;
      }
    })
  }
  createNewAlbum() {
    const a = new Album();
    a.uid = firebase.database().ref('albums').push().key;
    return a;
  }
  getAlbum(uid: string): Album {
    let result = null;
    this.albums.forEach(a => {
      console.log(uid, a.uid)
      if (a.uid === uid) {
        result = a;
      }
    })
    return result;
  }
}
