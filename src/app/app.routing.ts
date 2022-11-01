import { Injectable, NgModule } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component: NavbarComponent,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'roles',
        title: 'Role',
        component: NavbarComponent,
        loadChildren: () => import('./pages/role/role.module').then(m => m.RoleModule)
    },
    {
        path: 'transactions',
        title: 'Transaction',
        component: NavbarComponent,
        loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionModule)
    },
    {
        path: 'product-categories',
        title: 'Product Category',
        component: NavbarComponent,
        loadChildren: () => import('./pages/product-category/product-category.module').then(m => m.ProductCategoryModule)
    },
    {
        path: 'products',
        title: 'Product',
        component: NavbarComponent,
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },

]

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Shamo | ${title}`);
    }
  }
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        {
          provide: TitleStrategy,
          useClass: TemplatePageTitleStrategy
        }
      ]
})
export class AppRouting { }