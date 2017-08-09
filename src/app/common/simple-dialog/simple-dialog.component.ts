import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.scss']
})
export class SimpleDialogComponent implements OnInit {
  title = '';
  body = '';
  constructor() { }

  ngOnInit() {
  }

}
