import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent {
  public product:Product
  constructor(private srvis:ProductService,private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(
      (params) => {
        let id = + params["id"]
        this.getuj(id)
      }
    )
  }

  getuj(id:number){
    this.srvis.getOneById(id).subscribe((data)=>{
      this.product=data
    })
  }
}
