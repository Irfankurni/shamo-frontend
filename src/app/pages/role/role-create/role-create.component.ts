import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InsertRoleReq } from 'src/app/dto/role';
import { RoleService } from 'src/app/service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnDestroy {

  constructor(private roleService: RoleService, private router: Router) { }
  roleSubs?: Subscription
  role: InsertRoleReq = new InsertRoleReq()

  submit(): void {
    this.roleSubs = this.roleService.insert(this.role).subscribe(res => {
      this.router.navigateByUrl('/roles')
    })
  }

  ngOnDestroy(): void {
    this.roleSubs?.unsubscribe()
  }

}
