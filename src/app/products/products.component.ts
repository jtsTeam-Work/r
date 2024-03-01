import { Component, OnInit } from '@angular/core';
import { Products, ProductsServiceService } from '../products-service.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Products[] = [];
  CartService: any;


  constructor(private proService:ProductsServiceService) { }

  ngOnInit(): void {
    this.products=this.proService.getProducts();
  }

  AddProduct(products:Products){
    this.CartService.addProductToCart(products);
  }

}
