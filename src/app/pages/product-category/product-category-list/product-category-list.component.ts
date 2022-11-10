import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FindAllProductCategoryRes } from 'src/app/dto/product-category';
import { InsertProductCategoryReq } from 'src/app/dto/product-category/insert-product-category-req';
import { ProductCategoryService } from 'src/app/service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css'],
  providers: [ConfirmationService]
})
export class ProductCategoryListComponent implements OnInit, OnDestroy {

  constructor(
    private categoryService: ProductCategoryService,
    private router: Router,
    private confirmationService: ConfirmationService) { }

  categories: FindAllProductCategoryRes = new FindAllProductCategoryRes()
  category: InsertProductCategoryReq = new InsertProductCategoryReq()
  categoryDialog: boolean = false
  categorySubs?: Subscription
  submitted: boolean = false
  isUpdate: boolean = false
  idDeleted!: number

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.categorySubs = this.categoryService.findAll().subscribe(res => {
      this.categories = res
    })
  }

  openDialog(): void {
    this.category = new InsertProductCategoryReq()
    this.categoryDialog = true
    this.isUpdate = false
  }

  hideDialog(): void {
    this.categoryDialog = false
    this.submitted = false
    this.initData()
  }

  editCategory(category: InsertProductCategoryReq): void {
    this.category = category
    this.isUpdate = true
    this.categoryDialog = true
  }

  submit(): void {
    this.submitted = true
    if(this.isUpdate === false && this.category.category){
        this.categoryService.insert(this.category).subscribe(res => {
          this.categoryDialog = false
          this.initData()
          this.submitted = false
        })
    } else if(this.isUpdate === true && this.category.category && this.category.isActive){
      this.categoryService.update(this.category).subscribe(res => {
        this.categoryDialog = false
        this.initData()
        this.submitted = false
      })
    }
  }

  onDelete(id: number): void {
    this.idDeleted = id
  }

  delete(): void {
    this.categorySubs = this.categoryService.delete(this.idDeleted).subscribe(res => {
      this.initData()
    })
  }

  confirm(id: number) {
    this.idDeleted = id
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete()
      }
    });
  }

  ngOnDestroy(): void {
    this.categorySubs?.unsubscribe()
  }

}
