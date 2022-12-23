import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {EMPTY, Observable} from "rxjs";
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router:Router) {}

  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const item = localStorage.getItem('ExpireDate');
    const expireDate =new Date(item ? JSON.parse(item) : Date.now())
    const DateNow = new Date();
    if (token) {
      if (expireDate < DateNow && expireDate) {
        localStorage.clear();
       this.router.navigate(['/login']);
        return EMPTY;
      }
       const bearer = `Bearer ${token}`;
        const reqClone = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: bearer,
          }),
        });

         return next.handle(req);
    }
    else{
        return next.handle(req);
    }
  }

}
