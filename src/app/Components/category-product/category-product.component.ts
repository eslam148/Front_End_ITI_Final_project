import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Model/IProduct';
import { ISubCategory } from 'src/app/Model/isub-category';
import { ProductService } from 'src/app/Services/product.service';
import { SubCategoryService } from 'src/app/Services/sub-category.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnChanges {
  subList:ISubCategory[]=[];
  prodList:IProduct[]=[];
  subCatID!:number;
  min!:number;
  max!:number;
  constructor(private sub_serviece :SubCategoryService,
              private rout:ActivatedRoute,
              private prod_service:ProductService){
  

  }

  ngOnChanges(changes: SimpleChanges): void {
    
    
    
  }
  ngOnInit(): void {
   
    this.rout.paramMap.subscribe(paramMap =>{
     let currentCatID=(paramMap.get('id'))?Number(paramMap.get('id')):1;
    this.sub_serviece.getSubCategory(currentCatID).subscribe(subCat=>{
      this.subList=[];
      for(let sub of subCat )
      {
        
        this.subList.push(sub);
      }
      //console.log(this.subList);
    });

  });


  this.rout.paramMap.subscribe(paramMap =>{
    this.subCatID=(paramMap.get('sub_id'))?Number(paramMap.get('sub_id')):1;
   this.prod_service.getProdBySubCatId(this.subCatID).subscribe(prod=>{
     this.prodList=[];
     for(let p of prod )
     {
       this.prodList.push(p);
     }
     //console.log(this.prodList);
   });

 });
  }

  FilterByPrice(){
    this.prod_service.getProdBySubCatIdAndPrice(this.subCatID,this.min,this.max)
    .subscribe(prod=>{
      this.prodList=[];
      for(let p of prod)
      {
        this.prodList.push(p);
      }
    });
    /* console.log(this.min);
    console.log(this.max); */
  }

}
