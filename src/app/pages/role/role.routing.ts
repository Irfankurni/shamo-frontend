import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoleCreateComponent } from "./role-create/role-create.component";
import { RoleListComponent } from "./role-list/role-list.component";

const routes: Routes = [
    {
        path: '',
        component: RoleListComponent
    },
    {
        path: 'create',
        component: RoleCreateComponent
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
export class RoleRouting{}