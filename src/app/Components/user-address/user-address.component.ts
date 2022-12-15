import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iaddress } from 'src/app/Model/iaddress';
import { UserServicesService } from 'src/app/Services/user-services.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent {
  newAddress:Iaddress={} as Iaddress
  // errorMessege:string="";

  constructor(private userServices:UserServicesService, private router:Router){}

  addAddress(){
    this.userServices.addUserAddress(this.newAddress).subscribe(p=>{this.router.navigate(['/payment'])});
      // console.log(this.errorMessege)
      console.log(this.newAddress)
  }

}
