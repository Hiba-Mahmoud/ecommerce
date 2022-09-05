import { Component, OnInit } from '@angular/core';
import { Products } from './../models/products';
import ddd from "../../assets/productsData.json";
import { ActivatedRoute } from '@angular/router';
// import { Products } from '../models/products';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  
  items : Array<Products>=ddd;
  productsDetails:Products |undefined={
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "men's clothing",
    image: "",
    rating: {
    rate: 0,
    count: 0
    }}
    
  constructor(private activateRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    const activateRouteID =this.activateRoute.snapshot.params['id'];
    this. productsDetails = this.items.find((product)=>product.id == activateRouteID);
    console.log(this.productsDetails)

  }

}
