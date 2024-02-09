import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public url = "https://dummyjson.com/products/"
  constructor(private _httpClient: HttpClient) { }

  private createFromObject(prod: Product) {
    return new Product(prod.id, prod.title, prod.price, prod.discountPercentage, prod.rating, prod.stock, prod.brand, prod.category, prod.thumbnail, prod.images)
  }

  public getAll(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.url).pipe(
      map((dataList: any) => 
        dataList.products.map((data:any) => 
          this.createFromObject(data)
        )
      )
    )
  }

  public getOneById(id: number): Observable<Product> {
    return this._httpClient.get<Product>(this.url+''+id).pipe(
      map((data: any) => this.createFromObject(data))
    )
  }
  public create(prod: Product): Observable<Product> {
    return this._httpClient.post(this.url, prod).pipe(
      map((data: any) => this.createFromObject(data))
    )
  }
  public update(prod: Product): Observable<Product> {
    return this._httpClient.put(this.url + "/" + prod.id, prod).pipe(
      map((data: any) => this.createFromObject(data))
    )
  }
  public delete(id: number): Observable<Product> {
    return this._httpClient.delete(this.url + "/" + id).pipe(
      map((data: any) => this.createFromObject(data))
    )
  }
}
