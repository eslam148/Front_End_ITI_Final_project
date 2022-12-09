import { HttpClient } from '@angular/common/http';
import { IProduct } from './../../Model/IProduct';
import { ProductService } from './../../Services/product.service';
import { Component, OnDestroy, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnDestroy,AfterViewInit ,OnChanges{
  products: IProduct[] = [];
  filterdProducts: IProduct[] = [];
  searchstring: string = "";

  constructor(private ProductService: ProductService, private _Route: ActivatedRoute) {
    this._Route.paramMap.subscribe(
      param => {
        this.searchstring = (param.get('ser')) ? param.get('ser') as string : "";
        console.log(this.searchstring)

      });

    this.ProductService.getAllProducts()
    .subscribe(products => {
      this.filterdProducts = this.products = products;
      console.log(this.products)
      this.search()

    });


    console.log(this.products)
  }
  ngOnChanges(changes: SimpleChanges): void {
    //this.search()
  }
  ngAfterViewInit(): void {
    //console.log(this.products)
    //location.reload();

  }

  ngOnInit(): void {



  //  this.search(this.searchstring)

  }
  search(): void {
    if (this.searchstring) {
      console.log(this.products)
      this.filterdProducts = this.products.filter(p =>(
         p.name.toLocaleLowerCase().includes(this.searchstring.toLocaleLowerCase())
         ||p.category.toLocaleLowerCase().includes(this.searchstring.toLocaleLowerCase())))
      console.log(this.filterdProducts)
    }
    else {
      console.log("false")
      this.filterdProducts = this.products;
    }
   // location.reload();
  }
  ngOnDestroy(): void {
   // this.subscribe.unsubscribe();
  }

}
