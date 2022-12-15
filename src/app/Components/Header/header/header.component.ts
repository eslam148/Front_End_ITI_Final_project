import { CategoryService } from './../../../Services/category.service';
import { ICategory } from './../../../Model/icategory';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { CartService } from '../../../Services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
  loggedIn!: boolean;
  categories: ICategory[] = [];
  serchstd: string = '';
  CartCount:number=0;
  constructor(
    public translate: TranslateService,
    private CategoryService: CategoryService,
    private router: Router,
    private AuthService: AuthService,
     private CartService: CartService
  ) {}
  ngOnChanges(): void {
   this.CartService.event.subscribe(c=> this.CartCount = c);
  }
  ngAfterViewInit(): void {
    console.log(this.categories);
  }
  ngOnInit(): void {
    this.AuthService.flag.subscribe((f: boolean) => (this.loggedIn = f));
    this.CategoryService.getCategories().subscribe((cat) => {
      (this.categories = cat), console.log(this.categories);
    });
  }
  search(s: string) {
    this.router.navigate(['/searching', this.serchstd]);
  }
  check() {
    //this.authService.loggedIn();
    this.AuthService.flag.subscribe((f) => (this.loggedIn = f));
    this.AuthService.logout().subscribe();
    this.router.navigate(['/login']);
  }
}
