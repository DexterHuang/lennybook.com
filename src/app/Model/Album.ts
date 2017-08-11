import { Photo } from './Photo';
export class Album {
    private photos: Photo[] = [];
    displayName: string;
    discription: string;
    uid: string;

    getPhotos() {
        if (this.photos.length > 0) {
            if (this.photos[0] instanceof Photo === false) {
                const temp: Photo[] = [];
                this.photos.forEach(o => {
                    const p = new Photo();
                    Object.assign(p, o);
                    temp.push(p);
                })
                this.photos = temp;
            }
        }
        return this.photos;
    }
}
