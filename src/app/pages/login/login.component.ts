import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginReq } from 'src/app/dto';
import { LoginService } from 'src/app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  constructor(private loginService: LoginService, private router: Router) { }

  loginReq: LoginReq = new LoginReq()
  loginSubs?: Subscription

  login(): void {
    this.loginSubs = this.loginService.login(this.loginReq).subscribe(res => {
      this.loginService.saveData(res)
      this.router.navigateByUrl('/home')
    })
  }

  ngOnDestroy(): void {
    this.loginSubs?.unsubscribe()
  }

}
