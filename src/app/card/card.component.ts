import { Component,Input, OnInit } from '@angular/core';
import { Products } from '../models/products';
// import { Products } from '../models/products';
import { Router } from '@angular/router';
import productsData from '../../assets/productsData.json';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() productsCard :Products={
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "men's clothing",
    image: "",
    rating: {
    rate: 0,
    count: 0
    }};
  
  // productsCard=productsData;
  constructor(private router:Router) {
   }
   goToRouting(id:number){
    this.router.navigate(["itemdetails",id]);
   }

  ngOnInit(): void {
  }

}
// import { Component, OnInit } from '@angular/core';


