import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { IUserRegister } from 'src/app/Model/IUserLogIn';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private AuthService: AuthService) {}

  registerSeller(register:any) {
    let x: IUserRegister = register;
    if(register.Role == "Seller"){
                this.AuthService.SignUpSeller(register).subscribe(i=> console.log(i));

    }
     if (register.Role == 'Buyer'){
          this.AuthService.SignUpBuyer(register).subscribe(i=> console.log(i));
     }
  }
}
