import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from 'src/app/Model/IProduct';
import {ProductService} from '../../Services/product.service'
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css'],
})
export class CategoryProductComponent implements OnInit {
  products: IProduct[]=[];
  constructor(
    private ProductService: ProductService,
    private activeroute: ActivatedRoute
  ) {

    this.activeroute.paramMap.subscribe((paramMap) => {
      let CatID = paramMap.get('id') ? Number(paramMap.get('id')) : 1;
      console.log(CatID)
      this.ProductService.GetProudctByCategory(CatID).subscribe((data) => {
        this.products = data;
              console.log(this.products);

      });
  })
}
  ngOnInit(): void {
  }
}
