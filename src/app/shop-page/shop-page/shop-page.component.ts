import { ShopService } from './../../service/shop-service/shop.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }

}
