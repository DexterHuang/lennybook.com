import { MathHelper } from './../service/MathHelper/MathHelper';
import * as firebase from 'firebase';
export class PendingPhoto {
    dataSmall: string;
    dataFull: string;
    uid: string;
    constructor(private albumUid) {
        this.uid = MathHelper.getRandomUUID();
    }
    upload() {
        const p = new Promise((resolve, reject) => {
            const b = this.dataURItoBlob(this.dataFull);
            firebase.storage().ref('albums/' + this.albumUid + '/' + this.uid).put(b).then(e => {
                return resolve(e.downloadURL);
            }).catch(e => {
                console.error(e);
                return reject(e);
            })
        })
        return p;
    }
    dataURItoBlob(dataURI) {
        const byteString = atob(dataURI.split(',')[1]);

        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });


    }
}
