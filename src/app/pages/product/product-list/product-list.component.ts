import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FindAllProductRes, InsertProductReq } from 'src/app/dto/product';
import { FindAllProductCategoryRes } from 'src/app/dto/product-category';
import { BASE_URL, ProductCategoryService, ProductService } from 'src/app/service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ConfirmationService]
})
export class ProductListComponent implements OnInit, OnDestroy {

  constructor(
    private productService: ProductService,
    private categoryService: ProductCategoryService,
    private router: Router
  ) { }
  products: FindAllProductRes = new FindAllProductRes
  product: InsertProductReq = new InsertProductReq
  categories: FindAllProductCategoryRes = new FindAllProductCategoryRes
  productsSubs?: Subscription
  productDialog: boolean = false
  submitted: boolean = false
  isUpdate: boolean = false
  idDeleted!: number
  baseUrl: string = BASE_URL

  ngOnInit(): void {
    this.initData()
    this.initCategory()
  }

  initData(): void {
    this.productsSubs = this.productService.findAll().subscribe(res => {
      this.products = res
    })
  }

  initCategory(): void {
    this.categoryService.findAll().subscribe(res => {
      this.categories = res
    })
  }

  openDialog(): void {
    this.product = new InsertProductReq
    this.productDialog = true
    this.isUpdate = false
  }

  hideDialog(): void {
    this.productDialog = false
    this.submitted = false
    this.initData()
  }

  editProduct(product: InsertProductReq): void {
    this.product = product
    this.isUpdate = true
    this.productDialog = true
  }

  submit(): void {
    this.submitted = true
    if (this.isUpdate === false) {
      this.productService.insert(this.product).subscribe(res => {
        this.productDialog = false
        this.submitted = false
        this.initData()
      })
    } else {
      this.productService.update(this.product).subscribe(res => {
        this.productDialog = false
        this.submitted = false
        this.initData()
      })
    }
  }

  addPhoto(id: number): void {
    this.router.navigateByUrl(`/products/add-galleries/${id}`)
  }

  ngOnDestroy(): void {
    this.productsSubs?.unsubscribe()
  }

}
