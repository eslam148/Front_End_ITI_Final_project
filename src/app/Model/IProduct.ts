export interface IProduct {
  no: number;
  id?:number,
  name: string;
  description: string;
  price: number;
  category: string;
  subCategory: number;
  discountID: number;
  qauntity: number; 
  sellerId: String;
  files: FileToUpload[];
  images:string[];
}
export interface FileToUpload {
  fileName: string ;
  fileAsBase64: string ;
}
