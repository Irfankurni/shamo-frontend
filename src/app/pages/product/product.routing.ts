import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductCreateComponent } from "./product-create/product-create.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductGalleryComponent } from "./product-gallery/product-gallery.component";

const routes: Routes = [
    {
        path: '',
        component: ProductListComponent
    },
    {
        path: 'create',
        component: ProductCreateComponent
    },
    {
        path: 'add-galleries/:id',
        component: ProductGalleryComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRouting { }