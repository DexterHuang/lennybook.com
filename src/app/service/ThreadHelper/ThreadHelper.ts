import { AlbumService } from './../album.service';
import { UserService } from 'app/service/user-service/user.service';
import { Injectable } from '@angular/core';
@Injectable()
export class ThreadHelper {

    constructor(private userService: UserService,
        private albumService: AlbumService) { }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async waitForServices(f: Function) {
        while (this.userService.initiated === false ||
            this.albumService.initiated === false) {
            await this.sleep(300);
        }
        f();
    }
}
