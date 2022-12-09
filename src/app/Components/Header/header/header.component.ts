import { CategoryService } from './../../../Services/category.service';
import { ICategory } from './../../../Model/icategory';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit,OnChanges{
  categories:ICategory[] =[];
  serchstd:string="";
  constructor(public translate:TranslateService,private CategoryService:CategoryService,private router:Router){

  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {

    console.log(this.categories)
  }
  ngOnInit(): void {

    this.CategoryService.getCategories().subscribe(cat =>{
      this.categories = cat,
      console.log(this.categories)
    })

  }
search(s:string)
{
  this.router.navigate(['/searching',this.serchstd])

}

}
