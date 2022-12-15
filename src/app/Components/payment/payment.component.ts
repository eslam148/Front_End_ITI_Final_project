import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {on} from 'events';
import {ICreateOrderRequest, IPayPalConfig} from 'ngx-paypal';
import {IOrder, IOrderDetails, OrderItem} from 'src/app/Model/IOrder';
import {IProduct} from 'src/app/Model/IProduct';
import { CartService } from '../../Services/cart.service';
import { OrderService } from '../../Services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  Order: IProduct[] = [];
  totalPrice: number = 0;
  OrderDB: OrderItem[] = [];
  public payPalConfig?: IPayPalConfig;
  constructor(
    public translate: TranslateService,
    private CartService: CartService,
    private OrderService: OrderService
  ) {


  }
  ngOnInit(): void {
    this.Order = this.CartService.GetOrder();
    this.Order.forEach((o) => {
      this.totalPrice += +o.price;
    });
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'AToDsg4D_1Rdhkp5gEA71rJcqvKLRahIV5DEC2wSVFdAkz6XdYODv2GsHzqx0UbqPCi-A3xLKSVabQX6', // add paypal clientId here
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: `${this.totalPrice}`,
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: `${this.totalPrice}`,
                  },
                },
              },
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        const item = window.localStorage.getItem('user');

        let user = item ? JSON.parse(item) : [];
        let or: IOrderDetails = {
          user_id: user.id,
          total: this.totalPrice,
          payment_id: +data.id,
          progress: 0,
        };
         var orderDetials : IOrderDetails;
        this.OrderService.addOrderDitalis(or).subscribe(od=>{
          orderDetials = od;
        });
        this.Order.forEach(o=>{
          this.OrderDB.push(<OrderItem>{
            order_Details_id: orderDetials.Id,
            product_id : o.no,
            quantity : o.qauntity
          });
        })
         this.OrderService.addOrderitems(this.OrderDB).subscribe();
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }
}
