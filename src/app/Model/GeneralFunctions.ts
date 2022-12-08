// export class GeneralFunctions {
//   addToCart(Id:number){
//    document.cookie = `CartItems=ID`;
//   }
// }
export function addToCart(Id:number){
  let x =  localStorage.getItem('CartItem') !=null? localStorage.getItem('CartItem'): "";
 // console.log(x);
    localStorage.setItem('CartItem', Id.toString()+";"+x);
  }

  export function GetCart():number[] {
     let x =  localStorage.getItem('CartItem')?.split(";").map(id=> Number.parseInt(id));
      x?.pop();
      console.log(x)
      return x==null ? []:x;
  }
