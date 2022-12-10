import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser, IUserLogIn, IUserRegister } from '../Model/IUserLogIn';
import {BehaviorSubject, catchError, map, Observable, of} from 'rxjs';
import {environment} from 'src/environments/environment.prod';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged = new BehaviorSubject<boolean>(false);
  flag = this.logged.asObservable();
  private httpOptions = {};
  constructor(private http: HttpClient, private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  login(IUserLogIn: IUserLogIn): Observable<IUser> {
    return this.http
      .post<IUser>(
        `${environment.BaseURL}/SignIn`,
        JSON.stringify(IUserLogIn),
        this.httpOptions
      )
      .pipe(
        map((userResponse) => {
          console.log('users: ', userResponse);
          this.saveToken(userResponse);
        }),
        catchError((error) => {
          console.log('error: ', error);
          this.router.navigate(['/login']);
          return of(error);
        })
      );
  }
  SignUpSeller(IUserRegister: IUserRegister): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.BaseURL}/SignUpSeller`,
      JSON.stringify(IUserRegister),
      this.httpOptions
    );
  }

  SignUpBuyer(IUserRegister: IUserRegister): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.BaseURL}/SignUpForBuyer`,
      JSON.stringify(IUserRegister),
      this.httpOptions
    );
  }

  saveToken(user: IUser) {
    window.localStorage.setItem('token', JSON.stringify(user.token));
    window.localStorage.setItem('user', JSON.stringify(user.data));
    this.logged.next(true);
    this.router.navigate(['/home']);
  }

  logout() {
    this.logged.next(false);
    localStorage.clear();
  }


   canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    let Allow:boolean = false;
    this.flag.subscribe(e=>{
      console.log(e)
      Allow = e;
    })
    if(Allow){
      return Allow;
    }
    else{
      this.router.navigate(['/login']);
      return Allow;

    }
  }
}
