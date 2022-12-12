import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/Model/icategory';
import { IProduct } from 'src/app/Model/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnChanges{

  categoryList: ICategory[]=[]

  newPrd:IProduct={} as IProduct
  prdList:IProduct[]=[]
  // errorMessege:string="";

constructor(private productService:ProductService, private categoryService:CategoryService, private router:Router){}
  ngOnChanges(): void {
   

  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(c=>{this.categoryList=c})
    console.log(this.categoryList)
  }

  InsertNewProduct(){
    this.productService.addNewProduct(this.newPrd).subscribe(p=>{this.router.navigate(['/sellerProducts'])});
      // console.log(this.errorMessege)
    console.log(this.newPrd)
  }
}
