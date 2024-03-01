import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  arrProducts : Products[] = [
    new Products(392001, "Cola", 14),
    new Products(392002, "Bread", 10),
    new Products(392003, "Bisk Zman", 7),
    new Products(392004, "Fairy lemon", 12),
    new Products(392005, "Crispy waffle", 14),
    new Products(392006, "Golden bread", 18),
  ]

  getProducts(){
    return this.arrProducts;
  }

}

export class Products {

  code:number;
  name:string;
  price:number;

  constructor(code:number, name:string, price:number){
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
