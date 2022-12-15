import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IChangePassword, IUser, IUserLogIn, IUserRegister } from '../Model/IUserLogIn';
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
    const item = window.localStorage.getItem('token');
    let token: String = item ? JSON.parse(item) : '';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
  }
  ChangePassword(ChangePassword: IChangePassword): Observable<IChangePassword> {
    return this.http
      .post<IChangePassword>(
        `${environment.BaseURL}/ChangePassword`,
        JSON.stringify(ChangePassword),
        this.httpOptions
      )
      .pipe(
        map((userResponse) => {
          console.log('users: ', userResponse);
        }),
        catchError((error) => {
          console.log('error: ', error);
          this.logout().subscribe();
          this.router.navigate(['/login']);
          return of(error);
        })
      );
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
    window.localStorage.setItem('isLoggedIn', 'true');

    this.logged.next(true);
    this.router.navigate(['/home']);
  }

  logout(): Observable<any> {
    this.logged.next(false);
    localStorage.clear();
    return this.http.get<any>(
      `${environment.BaseURL}/SignOut`,
      this.httpOptions
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let Allow: boolean = false;
    this.flag.subscribe((e) => {
      console.log(e);
      Allow = this.isLoggedIn();
    });
    if (Allow) {
      return Allow;
    } else {
      this.router.navigate(['/login']);
      return Allow;
    }
  }

  isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
  EditUser(UserInfo: IUserRegister): Observable<IUserRegister> {

   return this.http.post<IUserRegister>(
     `${environment.BaseURL}/EditUserInfo`,
     JSON.stringify(UserInfo),
     this.httpOptions
   );
  }
}

