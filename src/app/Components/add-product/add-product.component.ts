import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/Model/icategory';
import { FileToUpload, IProduct } from 'src/app/Model/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit, OnChanges {
  categoryList: ICategory[] = [];

  newPrd: IProduct = {} as IProduct;
  prdList: IProduct[] = [];
  //for uploud image
  theFile: any[] = [];
  files:FileToUpload[]=[];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) {}
  ngOnChanges(): void {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((c) => {
      this.categoryList = c;
    });
    console.log(this.categoryList);
  }

  InsertNewProduct() {
    this.newPrd.files = this.files;
    this.productService.addNewProduct(this.newPrd).subscribe((p) => {
     console.log(p);
    });
  }
  onFileChange(event: any) {
    this.theFile = [];
    if (event.target.files) {
      for (let img of event.target.files)
       this.theFile.push(img);
    }
  }
   uploadFile(): void {
     for (let img of this.theFile) {
       this.readAndUploadFile(img);
     }
  }
  private readAndUploadFile(theFile: any) {
    let file: FileToUpload = {
      fileName: '',
      fileAsBase64: '',
    };

    // Set File Information
    file.fileName = theFile.name;
    

    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader!: FileReader;
    reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result!.toString();

      this.files.push(file);
    };

    // Read the file
    reader.readAsDataURL(theFile);
  }
 
}
