import { UserService } from 'app/service/user-service/user.service';
import { Injectable } from '@angular/core';
@Injectable()
export class ThreadHelper {

    constructor(private userService: UserService) { }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async waitForUserService(f: Function) {
        while (this.userService.initiated === false) {
            await this.sleep(500);
        }
        f();
    }
}
