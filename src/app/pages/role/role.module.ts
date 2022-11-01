import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleUpdateComponent } from './role-update/role-update.component';
import { RoleRouting } from './role.routing';
import { TableModule } from 'primeng/table';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleCreateComponent,
    RoleUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoleRouting,
    TableModule,
    CheckboxModule,
    ConfirmDialogModule,
    CardModule,
    InputTextModule
  ]
})
export class RoleModule { }
