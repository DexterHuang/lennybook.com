import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import * as firebase from 'firebase';
import { MdDialog } from '@angular/material'
import { SimpleDialogComponent } from 'app/common/simple-dialog/simple-dialog.component';
import { UserService } from 'app/service/user-service/user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  modalActions = new EventEmitter<string | MaterializeAction>();
  constructor(private dialog: MdDialog, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }
  onClickGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((e) => {
      const dialog = this.dialog.open(SimpleDialogComponent).componentInstance;
      setTimeout(() => {
        dialog.title = 'Wellcome!';
        dialog.body = 'You will now be redicrected to the home page'
      }, 300);
      this.router.navigate(['home'])
    }).catch(function (error) {
      console.log('something wrong happend', error);
    });
  }
}
