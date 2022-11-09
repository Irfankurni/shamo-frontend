import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FindAllProductRes } from 'src/app/dto/product';
import { ProductService } from 'src/app/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService, private router: Router) { }
  products: FindAllProductRes = new FindAllProductRes()
  productsSubs?: Subscription

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.productsSubs = this.productService.findAll().subscribe(res => {
      this.products = res
    })
  }

  addPhoto(id: number): void {
    this.router.navigateByUrl(`/products/add-galleries/${id}`)
  }

  ngOnDestroy(): void {
    this.productsSubs?.unsubscribe()
  }

}
