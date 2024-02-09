import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Input() searchText:string;
  public products: Product[]
  constructor(private srvis: ProductService) { }
  getAll() {
    this.srvis.getAll().subscribe((data) => {
      this.products = data
    })
   
  }

  ngOnInit(): void {
    this.getAll()
    console.log(this.getAll())
  }
}
