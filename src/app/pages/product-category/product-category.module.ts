import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryListComponent } from './product-category-list/product-category-list.component';
import { ProductCategoryRouting } from './product-category.routing';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog'
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    ProductCategoryListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductCategoryRouting,
    TableModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule
  ]
})
export class ProductCategoryModule { }
