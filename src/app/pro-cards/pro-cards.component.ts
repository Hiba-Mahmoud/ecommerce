import { Products } from './../models/products';
import { Component, OnInit } from '@angular/core';
// import { Products } from '../models/products';
import { CardComponent } from '../card/card.component';
 import prodactsData from "../../assets/productsData.json"

@Component({
  selector: 'app-pro-cards',
  templateUrl: './pro-cards.component.html',
  styleUrls: ['./pro-cards.component.css']
})
export class ProCardsComponent implements OnInit {
 productList :Products[];
  constructor() {
    this.productList = prodactsData;
  }

  ngOnInit(): void {
  }

}
