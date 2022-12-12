import { Component } from '@angular/core';
import {IChangePassword} from 'src/app/Model/IUserLogIn';
import {AuthService} from '../../Services/auth.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  constructor(private AuthService: AuthService) {}

  changePassword(ChangePassword: IChangePassword) {
    ChangePassword.id = this.loadUserInfo().id;
    this.AuthService.ChangePassword(ChangePassword).subscribe();
  }
  loadUserInfo() {
    const item = window.localStorage.getItem('user');

    return item ? JSON.parse(item) : [];
  }
}
