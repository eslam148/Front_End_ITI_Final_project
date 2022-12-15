import { CategoryService } from './../../../Services/category.service';
import { ICategory } from './../../../Model/icategory';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { CartService } from '../../../Services/cart.service';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {loginState} from 'src/app/Model/IUserLogIn';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit, OnChanges {
  loggedIn!: loginState;
  categories: ICategory[] = [];
  serchstd: string = '';
  CartCount: number = 0;
  count$: Observable<number>;

  constructor(
    public translate: TranslateService,
    private CategoryService: CategoryService,
    private router: Router,
    private AuthService: AuthService,
    private CartService: CartService,
    private store: Store<{ Cart: number }>
  ) {
    this.count$ = store.pipe(select('Cart'));
  }
  ngOnChanges(): void {
    this.CartService.event.subscribe((c) => (this.CartCount = c));
    this.check();
  }
  ngAfterViewInit(): void {
    console.log(this.categories);
  }
  ngOnInit(): void {
    this.AuthService.flag.subscribe((f: loginState) => (this.loggedIn = f));
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
    this.router.navigate(['/home']);
  }
}
