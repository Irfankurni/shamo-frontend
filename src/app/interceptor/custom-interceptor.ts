import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Observable, tap } from "rxjs"
import { MessageService } from 'primeng/api';
import { LoginService } from "../service";

@Injectable()
export class CustomInterCeptor {

    constructor(private loginService: LoginService,
        private router: Router, private messageService: MessageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let reqClone = req
        const isLoginReq = req.url.includes('login')

        if (!isLoginReq) {
            reqClone = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.loginService.getToken()}`
                }
            })
        }
        return next.handle(reqClone).pipe(tap({
            next: result => {
                if (result instanceof HttpResponse) {
                    if (result.body.message) {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: result.body.message,
                            life: 1000
                        })
                    }
                }
            },
            error: result => {
                if (result instanceof HttpErrorResponse) {
                    if (result.error.message) {
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: result.error.message,
                            life: 1000
                        })
                    } else {
                        for (const error of result.error.errors) {
                            this.messageService.add({
                                severity: 'error',
                                summary: 'Error',
                                detail: error.defaultMessage,
                                life: 1000
                            })
                        }
                    }

                    if (result.status == 401) {
                        if (!isLoginReq) {
                            this.router.navigateByUrl('/login')
                        }
                    }
                }
            }
        }))
    }
}