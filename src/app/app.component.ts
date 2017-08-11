import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'app/service/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    const config = {
      apiKey: 'AIzaSyAp1qBAUpLR0xnfhHfvIUZdl6v_xnUu5C0',
      authDomain: 'lennybook-8fc79.firebaseapp.com',
      databaseURL: 'https://lennybook-8fc79.firebaseio.com',
      projectId: 'lennybook-8fc79',
      storageBucket: 'lennybook-8fc79.appspot.com',
      messagingSenderId: '532157829641'
    };
    firebase.initializeApp(config);
  }
}
