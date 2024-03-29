import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRouting } from './product.routing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGalleryComponent } from './product-gallery/product-gallery.component';
import { FileUploadModule } from 'primeng/fileupload';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductGalleryComponent
  ],
  imports: [
    CommonModule,
    ProductRouting,
    FormsModule,
    TableModule,
    CheckboxModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    FileUploadModule,
    TooltipModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,
    InputTextareaModule
  ]
})
export class ProductModule { }
