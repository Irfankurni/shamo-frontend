import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FindAllRolesRes } from 'src/app/dto/role';
import { RoleService } from 'src/app/service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
  providers: [ConfirmationService]
})
export class RoleListComponent implements OnInit, OnDestroy {

  constructor(private roleService: RoleService, private confirmationService: ConfirmationService) { }

  roles: FindAllRolesRes = new FindAllRolesRes()
  deleteSubscription?: Subscription
  idDeleted!: number

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.roleService.findAll().subscribe(res => {
      this.roles = res
    })
  }

  onDelete(id: number): void {
    this.idDeleted = id
  }

  delete(): void {
    this.deleteSubscription = this.roleService.delete(this.idDeleted).subscribe(res => {
      this.initData()
    })
  }

  ngOnDestroy(): void {
    this.deleteSubscription?.unsubscribe()
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

}
