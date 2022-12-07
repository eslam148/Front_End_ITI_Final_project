export interface IProduct {
  no: number;
  name: String;
  description: String;
  price: number;
  created_at: Date;
  modified_at: Date;
  deleted_at?: Boolean;
  category: String;
  subCategory: number;
  inventory_Id: null;
  discountID: number;
  discount:String;
  progress: number;
  isDeleted: Boolean;
  qauntity: number;
  selledQauntity: number;
  sellerId: String;
}
