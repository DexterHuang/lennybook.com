import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/service/user-service/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }
  onClickLogOut() {
    console.log('logut')
    this.userService.logout();
  }
}
