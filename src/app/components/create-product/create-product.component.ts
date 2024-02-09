import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductsComponent } from '../products/products.component';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  public prodF: FormGroup;
  public prod: Product;
  public prodC: ProductsComponent;

  constructor(private srvis: ProductService,private router:Router) { }
  ngOnInit(): void {
    this.initialForm();
  }

  public initialForm() {
    this.prodF = new FormGroup({
      id: new FormControl(1, [Validators.required]),
      title: new FormControl('', [Validators.required]),
      price: new FormControl(1, [Validators.required]),
      discountPercentage: new FormControl(1, [Validators.required]),
      rating: new FormControl(1, [Validators.required]),
      stock: new FormControl(1, [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      thumbnail: new FormControl('', [Validators.required]),
      images: new FormControl('', [Validators.required]),
    })
  }
  public submitForm() {
    let id = this.prodF.get('id')?.value;
    let title = this.prodF.get('title')?.value;
    let price = this.prodF.get('price')?.value;
    let discountPercentage = this.prodF.get('discountPercentage')?.value;
    let rating = this.prodF.get('rating')?.value;
    let stock = this.prodF.get('stock')?.value;
    let brand = this.prodF.get('rating')?.value;
    let category = this.prodF.get('rating')?.value;
    let thumbnail = this.prodF.get('rating')?.value;
    let images = this.prodF.get('rating')?.value;
    let prod = new Product(id, title, price, discountPercentage, rating, stock, brand, category, thumbnail, images[1]);
    this.create(prod)
  

  }

  public create(prod: Product) {
    this.srvis.create(prod).subscribe((data) => {
      this.prod = data;
    })
  }
}
