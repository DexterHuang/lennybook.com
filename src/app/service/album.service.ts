import { Album } from './../Model/Album';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AlbumService {
  albums: Album[] = []
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
      }
    })
  }
  createNewAlbum() {
    const a = new Album();
    a.uid = firebase.database().ref('albums').push().key;
    return a;
  }
  getAlbum(uid: string): Album {
    this.albums.forEach(a => {
      if (a.uid === uid) {
        return a;
      }
    })
    return null;
  }
}
