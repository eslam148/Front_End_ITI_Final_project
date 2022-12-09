import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Model/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
 product:IProduct|undefined

 constructor(private productservice:ProductService, private activateRoute:ActivatedRoute){}

 ngOnInit(): void {
  this.activateRoute.paramMap.subscribe((paramMap) => {
    let prdID = paramMap.get('no') ? Number(paramMap.get('no')) : 1;
    console.log(prdID);
    this.productservice.GetProductByID(prdID).subscribe((data) => {
      this.product = data;
      console.log(this.product);
    });
  });
  }


}
