import { Photo } from './Photo';
export class Album {
    private photos: Photo[] = [];
    displayName = 'NEW ALBUM';
    description: string;
    uid: string;
    coverPhoto: Photo;
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
    addPhoto(photo: Photo) {
        this.getPhotos().push(photo);
    }
    removePhoto(photo: Photo) {
        const index = this.getPhotos().indexOf(photo);
        if (index >= 0) {
            this.getPhotos().splice(index, 1);
        }
    }
}
